'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  /*
  All this code can be replaced by the below line
  req.on('readable', function() {
    var chunk = null;
    while (null !== (chunk = req.read())) {
        console.log(chunk.toString());
        res.write(chunk);
    }
  });
  req.on('end', function() {
    res.end();
  });
  */
 req.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});