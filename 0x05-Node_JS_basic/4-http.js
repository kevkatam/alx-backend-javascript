const { createServer } = require('node:http');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
