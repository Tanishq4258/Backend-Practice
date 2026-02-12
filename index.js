const express = require("express");
const app = express();

app.get("/user/:id/post/:postId", (req, res) => {
  console.log(req.params);
  res.send("User ID: " + req.params.id + ", Post ID: " + req.params.postId);
});

app.listen(3000, () => {
  console.log("Server running");
});
