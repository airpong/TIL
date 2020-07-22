import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
let data = 10;
export default function App() {
  const [idx, setIdx] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);

  const touch = async () => {
    await setIdx((idx) => {
      idx.shift();
      console.log(idx);
      return [...idx];
    });
    console.log(idx);
  };
  const abc = idx.filter((number) => idx.indexOf(number) < data);
  console.log(abc);
  return (
    <View style={styles.container}>
      <Text style>{idx.filter((number) => idx.indexOf(number) < data)}</Text>
      <Button
        onPress={touch}
        style={{ marginBottom: 30 }}
        title="hello"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
