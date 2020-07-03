import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./poster";
import Votes from "./Votes";
import { apiImage } from "../api";
import { trimText, dateLocal } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;
const ReleaseDate = styled.Text`
  font-size: 12px;
  color: white;
`;
const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;
const Horizontal = ({ id, title, releaseDate, poster, overview }) => {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("Detail", { id });
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>

          {releaseDate ? (
            <ReleaseDate>{dateLocal(releaseDate)}</ReleaseDate>
          ) : null}
          <Overview>{trimText(overview, 120)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
