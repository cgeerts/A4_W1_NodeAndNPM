<<<<<<< HEAD
const http = require('http'); // like a PHP require

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server is now running at http://${hostname}:${port}/`);
=======
const http = require('http'); // like a PHP require

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
>>>>>>> 7cfc7b9293df3cf17f8b4008d284508ea0729c4f
});