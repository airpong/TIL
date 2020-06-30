import React, { useState } from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { AppLoading } from "expo";
import TabNavi from "./nav/Tab";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
`;

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const onFinish = () => setIsReady(true);

  const loadAssets = () => {
    const imageAssets = cacheImages([
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    ]);
    Promise.all([...imageAssets]);
  };

  return isReady ? (
    <>
      <NavigationContainer>
        <TabNavi />
      </NavigationContainer>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
