const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();


app.get("/blocking", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  const data = fs.readFileSync(filePath);

  res.set("Content-Type", "text/html");  // VERY IMPORTANT
  res.send(data);
});


app.get("/nonblocking", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }

    res.set("Content-Type", "text/html");  // VERY IMPORTANT
    res.send(data);
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
