import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Analytics from "expo-firebase-analytics";

export default function App() {
  const tmp = async () => {
    console.log("logging start");
    const abc = await Analytics.logEvent("ButtonTapped", {
      name: "settings",
      screen: "profile",
      purpose: "Opens the internal settings",
    });
    console.log(abc);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={tmp}>
        <Text>Open up App.js to start working on your app!</Text>
        <View></View>
      </TouchableOpacity>
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
