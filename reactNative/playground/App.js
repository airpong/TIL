import * as React from "react";
import {
  Button,
  Text,
  Image,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

export default () => {
  return (
    <View style={{ flex: 1 }} accessible={true}>
      <View style={{ height: "50%", backgroundColor: "red" }}>
        <TouchableOpacity
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>abc</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: "30%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>allbe</Text>
      </TouchableOpacity>
      <Text>abc</Text>
    </View>
  );
};
