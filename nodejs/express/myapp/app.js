const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const http = require("http");
const session = require("express-session");
require("dotenv").config();
const rq = require("request");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const users = [];
app.set("port", process.env.PORT || 8001);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
  socket.join(socket.handshake.query.id);
  console.log("a user connected");
  const { id, email, JWT, name, imageUrl } = socket.handshake.query;
  const socketID = socket.id;
  users.push({ id, email, JWT, name, imageUrl, socketID });

  socket.on("together", (msg) => {
    socket.emit("together", users);
  });
  socket.on("togetherInvite", (msg) => {
    socket.emit("togetherInvite", { roomName: `${msg[0]}Room`, users: users });
    msg.map((user) => {
      console.log(user);
      socket.to(user).emit("inviteAccept", {
        roomName: `${msg.id}Room`,
        hostName: "하창언",
      });
    });
  });
});

server.listen(app.get("port"), () => {
  console.log("listening on ", app.get("port"));
});
