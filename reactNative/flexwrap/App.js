import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default function App() {
  return (
    <View
      style={{
        ...styles.container,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "space-around",
        marginTop: 100,
        marginBottom: 80,
      }}
    >
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "#f7f7f7",
          width: width / 4 + 20,
          height: width / 4 + 20,
          borderRadius: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
