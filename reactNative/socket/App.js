import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
// let sockJS = new SockJS("http://localhost:8080/ws");
let sockJS = new WebSocket("http://localhost:8080/ws/");
let stompClient = Stomp.client(sockJS);
stompClient.debug = () => {
  "abab";
};
const click = () => {
  console.log("haha");
  stompClient.connect(
    {
      abc: "bbb",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk2MDEyMzY4LCJleHAiOjE1OTY4NzYzNjh9.8Cw6UfG74hSq2Y21GYUxMVq3-Eb_SY7QUhEQuwYggHhAzVDvs5M_bEvls9ZwphQoMaqAD0INmQ9r6WVXm-Lx2w",
    },
    () => {
      console.log("connect!!");
    }
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={"hh"} onPress={click}></Button>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
