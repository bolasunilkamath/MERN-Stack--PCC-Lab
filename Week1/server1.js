const http = require('http');

const hostname = '172.16.11.113'; // this is ip address (check your machines ip address and type it here)
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');      // Indicates the type of data sent to Client
    if (req.url === '/') {
    res.statusCode = 200;                           // Status Code OK
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write('Hello sunil kamath, World!');      
   res.end();                 // End the Response with Hello, Node.js Server!
  } //else 
  if (req.url === '/about') {
   res.statusCode = 200;
   res.end('This is the About page.');
  } else {
  res.statusCode = 404;                           // Status Code Not Found!
   res.end('Page not found');
  }
});

server.listen(port, hostname, () => {             // START the server.
  console.log(`Server running at http://${hostname}:${port}/`);
});

