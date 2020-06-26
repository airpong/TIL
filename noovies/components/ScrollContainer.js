import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";

const ScrollContainer = ({ loading, children }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

export default ScrollContainer;
