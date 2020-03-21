const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to home");
});

app.listen(port, () => console.log("Server startet on port " + port));
