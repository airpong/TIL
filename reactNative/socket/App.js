import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import io from "socket.io-client";
import socket from "./socket";
// const socket = io(
//   "http://ec2-13-125-2-123.ap-northeast-2.compute.amazonaws.com:8001"
// );
// socket.emit("position", "127.555 37.555");
// socket.on("chat message", (msg) => {
//   console.log(msg);
// });

import { Platform } from "react-native";
console.log(Platform.OS);
// const socket = io(
//   "http://ec2-3-34-162-241.ap-northeast-2.compute.amazonaws.com:3000",
//   // "http://localhost:3000",
//   {
//     query: {
//       id: Platform.OS === "ios" ? 1 : 2,
//       email: "abc@abc.com",
//       JWT:
//         "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk2Nzg5OTczLCJleHAiOjE1OTc2NTM5NzN9.zpRiWy12M5BgI0Wfl1Hc_EIjXaif6vf2qJdjEl-ctX_QWkz-qXhWQUdt5EJ099X9nPPUC3PfIVqW8tw4UQl4oA",
//       name: Platform.OS === "ios" ? "하창언IOS" : "하창언android",
//       imageUrl: "",
//       latitude: 37.5,
//       longitude: Platform.OS === "ios" ? 127.5 : 127.49999,
//     },
//   }
// );
// socket.emit("chat message", "126.555 27.555");
// socket.on("chat message", (msg) => {
//   console.log(msg);
// });
// const together = () => {
//   console.log("clicked");
//   socket.emit(
//     "together",
//     JSON.stringify({
//       id: Platform.OS === "ios" ? "1" : "2",
//       latitude: 37.5,
//       longitude: Platform.OS === "ios" ? 127.5 : 127.49999,
//     })
//   );
// };

// socket.on("together", (msg) => {
//   console.log(msg);
// });
export default function App() {
  socket.emit("tmp", "tmp message come!");
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
