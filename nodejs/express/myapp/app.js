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
  socket.join("1");
  console.log("a user connected");
  // socket.on("chat message", (msg) => {
  //   console.log("Message : ", msg);
  //   io.emit("chat message", `Message From server : ${msg}`);
  // });
  socket.on("private message", async (msg) => {
    console.log("이게 먼저");
    let userResult;
    const result = await rq.get("http://www.google.co.kr", () => {
      userResult = "결과 입니다";
      console.log(userResult);
      socket.to(msg).emit("private message", `private message : ${userResult}`);
    });
  });
});

server.listen(app.get("port"), () => {
  console.log("listening on ", app.get("port"));
});
