import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Search from "../screens/Search";
import favorite from "../screens/favorite";
import Tv from "../screens/Tv";
import Movies from "../screens/Movies";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) =>
  route.state?.routeNames[route.state?.index] || "Movie";
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            let iconName = Platform.OS === "ios" ? "ios-" : "md-";
            if (route.name === "Movies") {
              iconName = iconName + "film";
            } else if (route.name === "TV") {
              iconName = iconName + "tv";
            } else if (route.name === "Search") {
              iconName = iconName + "search";
            } else if (route.name === "Discovery") {
              iconName = iconName + "heart";
            }
            return (
              <Ionicons
                name={iconName}
                color={focused ? "white" : "grey"}
                size={30}
              />
            );
          },
        };
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={favorite} />
    </Tabs.Navigator>
  );
};
