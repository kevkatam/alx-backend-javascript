const server = require('http');

const port = 1245;
const hostname = '127.0.0.1';

const fs = require('fs');

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
const app = server.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(process.argv[2].toString()).then((result) => {
      const datta = result.slice(0, -1);
      res.end(datta);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});
module.exports = app;
