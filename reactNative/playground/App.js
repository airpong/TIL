import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View styleds={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    marginHorizontal: 10,
    backgroundColor: "cyan",
  },
});
