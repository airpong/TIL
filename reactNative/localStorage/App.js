import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getAllKeys();
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log("no data");
  }
};

export default function App() {
  getData();
  return (
    <View style={styles.container}>
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
