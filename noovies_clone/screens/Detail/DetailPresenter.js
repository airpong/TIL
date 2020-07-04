import React from "react";
import { Dimensions, ActivityIndicator } from "react-native";

import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { apiImage } from "../../api";
import Poster from "../../components/poster";
import Votes from "../../components/Votes";
import { dateLocal } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Link from "../../components/Detail/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;
const Info = styled.View`
  width: 50%;
  margin-left: 40px;
  top: 20px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;
const Container = styled.View`
  flex-direction: row;
  top: 30px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;
export default ({ openBrowser, refreshFn, result, loading }) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      loading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>OverView</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : null}
        {loading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        ) : null}

        {result.spoken_languages ? (
          <>
            <DataName>Languages</DataName>
            <DataValue>
              {result.spoken_languages.map((l) => `${l.name} `)}
            </DataValue>
          </>
        ) : null}

        {result.release_date ? (
          <>
            <DataName>Release</DataName>

            <DataValue>{dateLocal(result.release_date)}</DataValue>
          </>
        ) : null}

        {result.status ? (
          <>
            <DataName>status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}

        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} Minutes</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>First Air Date</DataName>

            <DataValue>{dateLocal(result.first_air_date)}</DataValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((g, index) =>
                index + 1 === result.genres.length ? g.name : `${g.name}, `
              )}
            </DataValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} Minutes</DataValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <DataName>Seosons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
          </>
        ) : null}
        {result.imdb_id ? (
          <Link
            text={"IMDB Page"}
            icon={"imdb"}
            onPress={() =>
              openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
            }
          />
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
      </Data>
    </ScrollContainer>
  );
};
