const http = require("http");
const fs = require("fs");

const comments = [];

const server = http.createServer((req, res) => {
  // do server stuff
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      let commentList = "";

      for (const comment of comments) {
        commentList += `<li>${comment}</li>`;
      }

      const responseBody = htmlPage.replace(
        /#{comments}/,
        comments.length ? commentList : `<h4>No Comment Created</h4>`
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/styles") {
      const responseBody = fs.readFileSync("index.css");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      return res.end(responseBody);
    }

    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      comments.push(comment);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`server is running on port ${port}`));
