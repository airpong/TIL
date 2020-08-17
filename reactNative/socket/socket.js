import React from "react";
import { View, Text } from "react-native";
import io from "socket.io-client";
const socket = io(
  // "http://ec2-3-34-162-241.ap-northeast-2.compute.amazonaws.com:3000",
  "http://localhost:8001",
  {
    query: {
      id: Platform.OS === "ios" ? 1 : 2,
      email: "abc@abc.com",
      JWT:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk2Nzg5OTczLCJleHAiOjE1OTc2NTM5NzN9.zpRiWy12M5BgI0Wfl1Hc_EIjXaif6vf2qJdjEl-ctX_QWkz-qXhWQUdt5EJ099X9nPPUC3PfIVqW8tw4UQl4oA",
      name: Platform.OS === "ios" ? "하창언IOS" : "하창언android",
      imageUrl: "",
      latitude: 37.5,
      longitude: Platform.OS === "ios" ? 127.5 : 127.49999,
    },
  }
);
socket.on("together", (msg) => {
  console.log(msg);
});
export default socket;
