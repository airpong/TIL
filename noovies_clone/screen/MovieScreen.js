import React from "react";
import { View, Text } from "react-native";

function MovieScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Movie!</Text>
    </View>
  );
}

export default MovieScreen;
