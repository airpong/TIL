import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
export default () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 300, backgroundColor: "red" }}></View>
      <View style={{ height: 300, backgroundColor: "blue" }}></View>
      <View style={{ height: 300, backgroundColor: "black" }}></View>
      <View style={{ height: 300, backgroundColor: "purple" }}></View>
    </ScrollView>
  );
};
