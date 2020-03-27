// sockets.js
var socketio = require("socket.io");

module.exports.listen = function(app) {
  io = socketio.listen(app);

  /*SOCKETS*/
  let sessions = {};

  const leaveSession = (sessionId, userId) => {
    console.log(sessionId);
    if (typeof sessionId !== "undefined") {
      let users = sessions[sessionId].users;
      users.splice(users.indexOf(userId), 1);
      console.log(`${userId} leaved session "${sessionId}"`);
      if (sessions[sessionId].users.length === 0) {
        console.log(`Session "${sessionId}" has closed`);
      }
    }
  };

  io.sockets.on("connection", function(socket) {
    console.log(socket.id + " connected");

    socket.on("enter session", function(sessionId) {
      socket.join(sessionId);
      if (sessions[sessionId]) {
        sessions[sessionId].users.push(socket.id);
      } else {
        sessions[sessionId] = { users: [socket.id] };
      }

      socket["sessionId"] = sessionId;
      console.log(sessions[sessionId]);
    });

    socket.on("leave session", function() {
      leaveSession(socket.sessionId, socket.id);
      socket.leave(socket.sessionId);
    });

    socket.on("heroChangePoints", function(sessionId, heroId, value, type) {
      socket
        .in(sessionId)
        .broadcast.emit("heroChangePoints", heroId, value, type);
      console.log(`${heroId} now holds ${value} ${type}`);
    });

    socket.on("disconnect", function() {
      leaveSession(socket.sessionId, socket.id);
      socket.leave(socket.sessionId);
    });
  });

  return io;
};