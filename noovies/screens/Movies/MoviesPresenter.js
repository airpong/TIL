import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;
const Header = styled.View`
  width: 100%;
  height: ${Math.floor(height / 3)}px;
`;

const Section = styled.View`
  background-color: red;
  height: ${width}px;
`;

const Text = styled.Text``;

export default (movies) => {
  return (
    <Container>
      {movies.loading ? (
        <ActivityIndicator color="red" size="small" />
      ) : (
        <Header>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {movies.nowPlaying.map((movie) => (
              <Section key={movie.id}>
                <Text>{movie.original_title}</Text>
              </Section>
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  );
};
