const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  // create a route handler for '/' to respond with the index.html file

  /*
    1. get the response body
    2. set status code
    3. set header
    4. return body and end res. 
  */
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));