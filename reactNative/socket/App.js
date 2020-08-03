import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import io from "socket.io-client";

// const socket = io(
//   "http://ec2-13-125-2-123.ap-northeast-2.compute.amazonaws.com:8001"
// );
// socket.emit("position", "127.555 37.555");
// socket.on("chat message", (msg) => {
//   console.log(msg);
// });
const socket = io("http://localhost:8001");
// socket.emit("chat message", "126.555 27.555");
// socket.on("chat message", (msg) => {
//   console.log(msg);
// });
socket.emit("private message", "1");
socket.on("private message", (msg) => {
  console.log(msg);
});
export default function App() {
  return (
    <View style={styles.container}>
      <Button title={"hh"}></Button>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
