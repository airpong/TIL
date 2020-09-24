import React, { Component } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import { Restart } from "fiction-expo-restart";
let uri = "100";
let b = false;
if (b) {
  uri =
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160713_21%2Ftnswk4055_1468421602148yrSo7_JPEG%2F%25BD%25C4%25B4%25E7%25BB%25E7%25C1%25F8.jpg&type=sc960_832";
} else {
  uri = "https://cdn.pixabay.com/photo/2020/06/29/10/55/pizza-5352320__480.png";
}
export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri,
          }}
        ></Image>
      </View>
    );
  }
}
