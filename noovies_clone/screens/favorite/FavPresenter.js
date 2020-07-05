import React, { useState } from "react";
import { PanResponder, Dimensions, Animated } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
const styles = {
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};
export default ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 200) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else if (dx <= -200) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-13deg", "0deg", "13deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [1, 0.1, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [1, 0.3, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results.map((result, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ url: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ url: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ url: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
