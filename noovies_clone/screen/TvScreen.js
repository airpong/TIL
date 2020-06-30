import React from "react";
import { View, Text } from "react-native";

function TvScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Tv!</Text>
    </View>
  );
}

export default TvScreen;
