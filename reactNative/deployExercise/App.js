import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Asset } from "expo-asset";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const cacheImageFunc = () => {
    const Images = [
      require("./assets/1.png"),
      require("./assets/2.png"),
      // require("./assets/3.png"),
    ];
    const cacheImages = Images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./assets/1.png")}
        ></Image>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./assets/2.png")}
        ></Image>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={cacheImageFunc}
        onFinish={() => setIsLoading(true)}
        onError={() => {
          console.log("error in Apploading");
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
