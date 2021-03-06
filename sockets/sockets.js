// sockets.js
var socketio = require("socket.io");

module.exports.listen = function (app) {
  io = socketio.listen(app);

  /*SOCKETS*/
  let sessions = {};

  const leaveSession = (sessionId, userId) => {
    if (typeof sessionId !== "undefined") {
      let users = sessions[sessionId].users;
      users.splice(users.indexOf(userId), 1);
      console.log(`${userId} leaved session "${sessionId}"`);
      if (sessions[sessionId].users.length === 0) {
        console.log(`Session "${sessionId}" has closed`);
      }
    }
  };

  io.sockets.on("connection", function (socket) {
    console.log(socket.id + " connected");

    socket.on("enter session", function (sessionId, hero) {
      socket.join(sessionId);
      if (sessions[sessionId]) {
        sessions[sessionId].users.push(socket.id);
      } else {
        sessions[sessionId] = { users: [socket.id] };
      }

      // set the heroID
      socket["heroID"] = hero.id;

      socket["sessionId"] = sessionId;

      if (sessions[sessionId]) {
        socket
          .to(sessions[sessionId].users[0])
          .emit("request session", socket.id);
      }

      socket.to(socket.sessionId).emit("add hero", hero);
    });

    socket.on("send session", function (session, id) {
      socket.in(id).broadcast.emit("set session", session);
    });

    socket.on("leave session", function () {
      socket.in(socket.sessionID).broadcast.emit("delete hero", socket.heroID);
      leaveSession(socket.sessionId, socket.id);
      socket.leave(socket.sessionId);
    });

    socket.on("heroChangePoints", function (sessionId, heroId, value, type) {
      socket
        .in(sessionId)
        .broadcast.emit("heroChangePoints", heroId, value, type);
      console.log(`${heroId} now holds ${value} ${type}`);
    });

    socket.on("heroChangeSchips", function (sessionId, heroId, value) {
      socket.in(sessionId).broadcast.emit("heroChangeSchips", heroId, value);
      console.log(`${heroId} now holds ${value} Schips`);
    });

    socket.on("disconnect", function () {
      socket.in(socket.sessionId).broadcast.emit("delete hero", socket.heroID);
      leaveSession(socket.sessionId, socket.id);
      socket.leave(socket.sessionId);
    });
  });

  return io;
};
