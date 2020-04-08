const express = require("express");
const app = express();
var http = require("http");
const server = http.createServer(app);
var io = require("./sockets/sockets").listen(server);
const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

server.listen(port, () => console.log(`Listening on Port ${port}`));
