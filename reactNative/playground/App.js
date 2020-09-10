import * as React from "react";
import { Button, Image, View, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: 127.4324,
          latitudeDelta: 0.922,
          longitudeDelta: 0.421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: 127.4324 }} />
        <Marker coordinate={{ latitude: 37.78825, longitude: 127.3324 }} />
      </MapView>
    </View>
  );
};
