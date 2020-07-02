import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";
export default () => {
  const [movies, setMovies] = useState({
    result: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{movies.results?.length}</Text>
    </View>
  );
};
