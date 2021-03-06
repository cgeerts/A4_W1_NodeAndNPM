const http = require('http'); // like a PHP require
const stream = require('fs');

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let url = req.url; // localhost:3000/contact

  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server is now running at http://${hostname}:${port}/`);
});