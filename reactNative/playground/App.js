import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <CheckBox />
    </ScrollView>
  );
};
