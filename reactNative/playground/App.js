import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>닉네임 : </Text>
        <Text style={{}}>Hello</Text>
        <View style={{ flexDirection: "row" }}></View>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: 20,
            borderRadius: 20,
            marginLeft: 10,
          }}
        >
          <AntDesign style={{}} name="edit" size={15} color="black" />
        </View>
      </View>
    </View>
  );
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
