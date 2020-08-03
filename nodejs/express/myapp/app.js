const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const http = require("http");
const session = require("express-session");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
var io = require("socket.io")(server);
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
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log("Message : ", msg);
    io.emit("chat message", msg);
  });
});
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });
// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//   res.status(err.status || 500);
//   res.render("error");
// });

server.listen(app.get("port"), () => {
  console.log("listening on *:3000");
});
