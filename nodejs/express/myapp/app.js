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
const gameRoomUserList = [];
const dummyUsers = [
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
];
let tmpVar = 1;
app.set("port", process.env.PORT || 8002);

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
  const dummyRestaurant = {
    restaurants: [
      {
        address: "서울특별시 마포구 합정동 368-3",
        categories: "카페",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 16,
        latitude: 37.5457138,
        longitude: 126.9150015,
        menuList: [],
        name: "빈브라더스 합정",
        naverId: 35431552,
        openingHours: "매일 11:00~22:30",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 토정로 35-1",
        thumUrl:
          "http://ldb.phinf.naver.net/20160726_155/1469502303512PLBDt_JPEG/176676523522287_0.jpeg",
      },
      {
        address: "서울특별시 마포구 합정동 372-17",
        categories: "일식",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 15,
        latitude: 37.5472597,
        longitude: 126.9143486,
        menuList: [],
        name: "시오",
        naverId: 1605124064,
        openingHours:
          "평일 11:30~21:30 크로스타임3시~5시 | 주말 11:30~21:30 크로스타임3:30~5시",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 독막로2길 30 1층",
        thumUrl:
          "http://ldb.phinf.naver.net/20190412_124/1555050716829bIJFR_JPEG/6g5CPH9rHWZ6SOar3Kj0TNQ6.jpg",
      },
      {
        address: "서울특별시 마포구 합정동 386-37",
        categories: "카페",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 14,
        latitude: 37.5513266,
        longitude: 126.9109364,
        menuList: [],
        name: "마담티라미수",
        naverId: 1132863024,
        openingHours: "매일 09:00~23:00 추석당일 / 1월 1일 휴무",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 양화로3길 55",
        thumUrl:
          "http://ldb.phinf.naver.net/20180315_199/1521082296807CfoWa_PNG/IYGMb4j9HaMisFfdbSzJW1fb.PNG.png",
      },
      {
        address: "서울특별시 마포구 합정동 473",
        categories: "세계음식",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 13,
        latitude: 37.5510986,
        longitude: 126.9118854,
        menuList: [],
        name: "감성타코합정점",
        naverId: 625311806,
        openingHours: "평일 11:30~10:00 LO 21:00 | 주말 12:00~10:00 LO 21:00",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 월드컵로3길 14",
        thumUrl:
          "http://ldb.phinf.naver.net/20170501_273/1493630341977BdrFA_JPEG/186451584920764_0.jpeg",
      },
      {
        address: "서울특별시 마포구 합정동 473",
        categories: "양식",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 12,
        latitude: 37.5506613,
        longitude: 126.9119047,
        menuList: [],
        name: "콘크리트 엔젤",
        naverId: 1634128388,
        openingHours:
          "월요일 09:30~20:00 브레이크 타임 15:30-17:00 | 수요일 09:30~20:00 브레이크 타임 15:30-17:00 | 목요일 09:30~20:00 브레이크 타임 15:30-17:00 | 금요일 09:30~20:00 브레이크 타임 15:30-17:00 | 주말 09:30~20:00 브레이크 타임 15:30-17:00",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress:
          "서울특별시 마포구 월드컵로3길 14 마포한강푸르지오2차상가 1층 103,104호",
        thumUrl:
          "http://ldb.phinf.naver.net/20191009_111/1570610320593RhVC3_JPEG/rBkXgYd3_OTZHfDwyPOWGG2W.jpg",
      },
      {
        address: "서울특별시 마포구 합정동 392-1",
        categories: "일식,주점",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 11,
        latitude: 37.5501382,
        longitude: 126.9102718,
        menuList: [],
        name: "카에루",
        naverId: 37286386,
        openingHours: "매일 18:00~03:00 | 일요일 휴무",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 양화로1길 31 우진빌딩",
        thumUrl:
          "http://ldb.phinf.naver.net/20200525_7/1590413694520TtLPg_JPEG/FTvDUOgNcTT83b0ftVDLm_Yf.jpg",
      },
      {
        address: "서울특별시 마포구 합정동 357-6",
        categories: "카페",
        googleId: null,
        googleRating: null,
        googleReviewCount: 0,
        id: 10,
        latitude: 37.5458323,
        longitude: 126.9184372,
        menuList: [],
        name: "앤트러사이트 합정점",
        naverId: 13316501,
        openingHours: "매일 09:00~23:00 일~금 | 토요일 09:00~24:00",
        phoneNumber: null,
        priceLevel: 0,
        roadAddress: "서울특별시 마포구 토정로5길 10",
        thumUrl:
          "http://ldb.phinf.naver.net/20150831_299/1441019167860ziSL3_JPEG/116252608275357_0.jpg",
      },
    ],
  };
  users.push({ id: id * 1, email, JWT, name, imageUrl, socketID });

  socket.on("together", (msg, fn) => {
    const tmpmsg = JSON.parse(msg);
    console.log("receive msg of together", tmpmsg);
    console.log(users);
    const aroundUsers = users.filter((user) => {
      console.log(typeof user.id, typeof tmpmsg.id);
      return user.id !== tmpmsg.id;
    });
    console.log("aroundUsers", aroundUsers);
    fn(
      JSON.stringify({
        aroundUsers,
      })
    );
  });
  socket.on("togetherInvite", (msg, fn) => {
    const tmpmsg = JSON.parse(msg);
    console.log(tmpmsg);
    socket
      .to(tmpmsg.inviteTheseUsers[0])
      .emit(
        "togetherInvitation",
        JSON.stringify({ roomName: "room1", hostName: "하창언" })
      );
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
    fn(JSON.stringify(dummyRestaurant));
  });
  socket.on("tmpMsg3", (msg) => {
    console.log(msg);
    const sendMsg = { roomName: "room1", hostName: "하창언" };
    socket.emit("togetherInvitation", JSON.stringify(sendMsg));
  });
  socket.on("gameUserFinish", (msg, fn) => {
    console.log(msg);
    const gameUserFinishMsg = { status: "wait", roomName: "room1" };
    fn(JSON.stringify(gameUserFinishMsg));
  });
  socket.on("tmpEvent", (msg) => {
    socket.emit(
      "gameRoomUpdate",
      JSON.stringify({
        gameRoomUserList: [
          {
            id: 2,
            name: "하창언",
            imageUrl:
              "https://lh6.googleusercontent.com/-aoBY_gzGubw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl3d9g2shwPeopi8H1s1synQa4jAA/photo.jpg",
          },
          {
            id: 3,
            name: "노영삼",
            imageUrl:
              "https://vpgrealty.ca/wp-content/uploads/2016/06/eric-agent-profile-image.jpg",
          },
        ],
        hostId: 2,
      })
    );
  });
  socket.on("tmpMsg2", (msg) => {
    const sendMsg = {
      roomGameResult: { result: "success", id: 11, headCount: 3, likeCount: 2 },
    };
    socket.emit("gameAllFinish", JSON.stringify(sendMsg));
  });
  socket.on("gameRoomJoin", (msg, fn) => {
    io.emit(
      "gameRoomUpdate",
      JSON.stringify({
        gameRoomUserList: [
          {
            id: 2,
            name: "하창언",
            imageUrl:
              "https://lh6.googleusercontent.com/-aoBY_gzGubw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl3d9g2shwPeopi8H1s1synQa4jAA/photo.jpg",
          },
          {
            id: 3,
            name: "노영삼",
            imageUrl:
              "https://vpgrealty.ca/wp-content/uploads/2016/06/eric-agent-profile-image.jpg",
          },
        ],
        hostId: 2,
      })
    );
    const sendMsg = {
      status: "success",
      roomName: "room1",
      gameRoomUserList: [
        {
          id: 2,
          name: "하창언",
          imageUrl:
            "https://lh6.googleusercontent.com/-aoBY_gzGubw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl3d9g2shwPeopi8H1s1synQa4jAA/photo.jpg",
        },
        {
          id: 3,
          name: "노영삼",
          imageUrl:
            "https://vpgrealty.ca/wp-content/uploads/2016/06/eric-agent-profile-image.jpg",
        },
      ],
      hostId: 2,
    };
    fn(JSON.stringify(sendMsg));
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