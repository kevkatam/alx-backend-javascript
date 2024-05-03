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
        console.log(`Number of students: ${len}`);
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}
module.exports = countStudents;
