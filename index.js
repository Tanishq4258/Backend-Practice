const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send(`User ID is ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Server running");
});
