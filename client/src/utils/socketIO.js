import socketIOClient from "socket.io-client";

const socketIO = socketIOClient("localhost:5000");

export default socketIO;
