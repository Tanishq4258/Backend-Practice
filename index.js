const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);

  res.writeHead(200, { "Content-Type": "text/plain" });
  if(req.url === "/") {
    res.end("Hello, World!");
  } else if(req.url === "/about") {
    res.end("This is the about page.");
    } else {
    res.end("404 Page not found.");
    }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
