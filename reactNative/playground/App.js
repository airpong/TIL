import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  const [ab, setAb] = useState(() => {
    return { hello: "abc" };
  });
  console.log(ab);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  textContainer: {
    flexDirection: "row",

    justifyContent: "center",
  },
});
