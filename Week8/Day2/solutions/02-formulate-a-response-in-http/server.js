// Your code here
const http = require("http");
// create a server using the create server method
const server = http.createServer((req, res) => {
  // responses here
  //   console.log("request ", req, "response ", res);
  // get a response body

  if (req.method === "GET" && req.url === "/comments") {
    const resBody = "This is a comment";

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end(resBody)
  }

  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

  // set status code
  res.statusCode = 200;
  // set content type
  res.setHeader("Content-Type", "text/html");
  // send response and end res
  //  res.write(responseBody)
  //  res.end()
  // above res.write and end is same as below
  return res.end(responseBody);
});

// open a port and listen for requests to that port
const port = 5000;
server.listen(port, () => console.log(`server listening on port ${port}`));
