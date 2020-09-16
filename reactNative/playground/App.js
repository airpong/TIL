import * as React from "react";
import {
  Button,
  Text,
  Image,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import HaversineGeolocation from "haversine-geolocation";
const points = [
  {
    latitude: 37.5379387,
    longitude: 127.066518,
  },
  {
    latitude: 37.5447048,
    longitude: 127.0663154,
  },
];
const abc = HaversineGeolocation.getDistanceBetween(points[0], points[1], "m"); // 1133062.7 m
console.log(Math.round(abc / 10) * 10);
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
