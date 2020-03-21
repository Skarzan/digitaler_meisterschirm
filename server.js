const express = require("express");
const app = express();
var http = require("http");
const server = http.createServer(app);
var io = require("socket.io")(server);
const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(port, () => console.log(`Listening on Port ${port}`));

io.sockets.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("heroChangePoints", function(heroId, value, type) {
    socket.broadcast.emit("heroChangePoints", heroId, value, type);
    console.log(`${heroId} now holds ${value} ${type}`);
  });
});
