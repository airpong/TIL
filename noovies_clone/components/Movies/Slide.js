import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Image } from "react-native";
import { apiImage } from "../../api";
import Poster from "../poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import Votes from "../Votes";
import { trimText } from "../../utils";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Bg = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
  background-color: white;
`;
const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 7px;
  font-size: 20px;
`;
const VotesContainer = styled.View`
  margin-bottom: 7px;
`;
const Overview = styled.Text`
  color: rgb(220, 220, 220);

  font-size: 10px;
  font-weight: 500;
`;
const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 3px;
`;
const ButtonText = styled.Text``;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {
  return (
    <Container>
      <Bg source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />

        <Data>
          <Title>{trimText(title, 40)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 110)}</Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default Slide;
