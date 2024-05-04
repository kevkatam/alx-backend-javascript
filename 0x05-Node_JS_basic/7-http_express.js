const express = require('express');

const app = express();
const fs = require('fs');

const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.log('Cannot load the database');
        reject(err);
      } else {
        const fields = {};
        const students = {};
        let length = 0;
        let result = '';

        const lines = data.toString().split('\n');
        lines.forEach((line) => {
          if (line) {
            length += 1;
            const field = line.toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        });

        const len = length - 1;
        result += `Number of students: ${len}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            result += `Number of students in ${k}: ${v}.`;
            result += ` List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((result) => {
    const datta = result.slice(0, -1);
    res.send(['This is the list of our students', datta].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});
module.exports = app;
