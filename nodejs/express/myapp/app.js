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
let tmpVar = 1;
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

  socket.on("together", (msg, fn) => {
    console.log(msg);
    fn(
      JSON.stringify({
        aroundUsers: [
          {
            id: 1,
            socketId: "abc",
            name: "하창언",
            imageUrl:
              "https://vpgrealty.ca/wp-content/uploads/2016/06/eric-agent-profile-image.jpg",
          },
          {
            id: 2,
            socketId: "bcd",
            name: "정성훈",
            imageUrl: "https://pbs.twimg.com/media/EWRXyp_UcAMHCPe.jpg",
          },
          {
            id: 3,
            socketId: "efg",
            name: "노영삼",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNmTX740wIiJiqu3yNYd2V6TR6R9C6H5KdUA&usqp=CAU",
          },
          {
            id: 4,
            socketId: "zfe",
            name: "김영호",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBb_vSO5GUg9-PyG4EkhPvYp9VcDj1PBZHUA&usqp=CAU",
          },
        ],
      })
    );
  });
  socket.on("togetherInvite", (msg, fn) => {
    console.log(msg);
    fn(
      JSON.stringify({
        roomName: "room1",
        gameRoomUserList: [
          {
            id: 2,
            name: "하창언",
            imageUrl:
              "https://lh6.googleusercontent.com/-aoBY_gzGubw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl3d9g2shwPeopi8H1s1synQa4jAA/photo.jpg",
          },
        ],
        hostId: 2,
      })
    );
  });
  socket.on("gameStart", (msg, fn) => {
    console.log(msg);
    fn("gameStart msg from server");
  });
  socket.on("gameUserFinish", (msg, fn) => {
    console.log(msg);
    fn("gameUserFinish msg from server");
  });
  // setTimeout(() => {
  //   console.log("setTimeout func");
  //   io.emit("gameAllFinish", "gameAllFinish msg from server");
  // }, 4000);
  // setTimeout(() => {
  //   console.log("setTimeout func");
  //   io.emit("gameRoomUpdate", "gameRoomUpdate msg from server");
  // }, 4000);

  socket.on("tmp", (msg) => {
    console.log(msg + "hello");
  });
  // socket.emit("gameRoomUpdate", "gameRoomUpdate msg from server");

  socket.on("disconnect", (reason) => {
    console.log("disconnect");
    console.log(reason);
  });
});

server.listen(app.get("port"), () => {
  console.log("listening on ", app.get("port"));
});
