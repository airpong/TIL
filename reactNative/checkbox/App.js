import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import Checkbox from "react-native-check-box";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity
        onPress={() => setIsChecked((before) => (before ? false : true))}
      >
        {isChecked ? (
          <MaterialIcons name="check-box" size={24} color="black" />
        ) : (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="black"
          />
        )}
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
