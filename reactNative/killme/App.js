import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import { AuthSession } from "expo";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./screens/LoginPage";

const hello = () => {
  console.log("hello");
};

const iosClientId =
  "561300838013-moddk7rl7plhahgitj8qs9v36pbi8km9.apps.googleusercontent.com";
const signInWithGoogleAsync = async function () {
  console.log("heelooo");
  try {
    const result = await Google.logInAsync({
      iosClientId: iosClientId,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      console.log(result.user.email);
      const response = axios.get("", { email: result.user.email });
      if (response.type === "fail") {
      }
      return result.accessToken;
    } else {
      console.log("fail");
      return { cancelled: true };
    }
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <LoginPage />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
