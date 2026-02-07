const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node Server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
