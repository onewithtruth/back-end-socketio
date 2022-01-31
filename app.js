const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const Server = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://localhost:3000",
    method: ["GET", "POST"],
  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  })
})

server.listen(8080, () => {
  console.log("SERVER RUNNING 8080")
})

module.exports = Server;