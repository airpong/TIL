import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import renderer from "react-test-renderer";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View></View>
      </View>
    );
  }
}
