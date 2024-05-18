const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};

        const lines = data.toString().split('\n');
        const clines = lines.slice(1);
        clines.forEach((cline) => {
          if (cline) {
            const field = cline.toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        });
        resolve(students);
      }
    });
  });
}
module.exports = readDatabase;
