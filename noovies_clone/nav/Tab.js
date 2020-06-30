import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieScreen from "../screen/MovieScreen";
import TvScreen from "../screen/TvScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavi = (obj) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Movie") {
              iconName = "ios-film";
            } else if (route.name === "Tv") {
              iconName = "ios-tv";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          style: {
            backgroundColor: "black",
          },
        };
      }}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "#e91e63",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen name="Movie" component={MovieScreen} />
      <Tab.Screen name="Tv" component={TvScreen} />
    </Tab.Navigator>
  );
};
export default TabNavi;
