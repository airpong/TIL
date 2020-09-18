import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { Restart } from "fiction-expo-restart";
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
        <Button
          title="restart!"
          onPress={() => {
            Restart();
          }}
        />
      </View>
    );
  }
}
