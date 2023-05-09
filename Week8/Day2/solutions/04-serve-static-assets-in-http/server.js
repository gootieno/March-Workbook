const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  switch (ext) {
    case "jpg":
      return "image/jpeg";
    case "css":
      return "text/css";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here

  // create a route handler for '/' to respond with the index.html file

  if (req.method === "GET" && req.url === "/") {
    /*
      1. get the response body
      2. set status code
      3. set header
      4. return body and end res. 
    */
    const responseBody = fs.readFileSync("index.html", "utf-8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }

  // if (req.method === "GET" && req.url === "/static/css/application.css") {
  //   console.log("css route ", req.url);
  //   const responseBody = fs.readFileSync("./assets/css/application.css");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/css");
  //   return res.end(responseBody);
  // }

  // if (req.method === "GET" && req.url === "/static/images/dog.jpg") {
  //   const responseBody = fs.readFileSync("./assets/images/dog.jpg");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "image/jpeg");
  //   return res.end(responseBody);
  // }

  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const assetPath = urlParts[1];
    console.log("asset path ", assetPath);

    const responseBody = fs.readFileSync(`./assets${assetPath}`);

    const extension = assetPath.split(".")[1];
    console.log("extension ", extension);
    const contentType = getContentType(extension);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(responseBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
