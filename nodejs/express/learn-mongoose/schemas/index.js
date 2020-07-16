const mongoose = require("mongoose");

module.exports = () => {
  console.log("I am in conneccc");
  const connect = () => {
    console.log("I am in connet");
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://airpong:hcu1125413@localhost:27017/admin",
      {
        dbName: "nodejs",
      },
      (error) => {
        if (error) {
          console.log("몽고디비 연결 에러", error);
        } else {
          console.log("몽고디비 연결 성공");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
    connect();
  });
  require("./user");
  require("./comment");
};
