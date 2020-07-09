import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  background-color: white;

  width: 200px;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Text = styled.Text`
  color: white;
  margin-right: 20px;
  font-size: 20px;
`;

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
const hello = () => {
  console.log("NickName : ");
};

const iosClientId =
  "561300838013-moddk7rl7plhahgitj8qs9v36pbi8km9.apps.googleusercontent.com";

const signInWithGoogleAsync = async function ({ navigation }) {
  console.log("hello", navigation);
  try {
    const result = await Google.logInAsync({
      iosClientId: iosClientId,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      const response = { type: "fail" };

      if (response.type === "fail") {
        navigation.navigate("signIn", { email: "hello@naver.com" });
      }
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};
const googleLogin = ({ navigation }) => {
  // console.log(navigation);
  return (
    <Container>
      <Button
        title="Google Login"
        onPress={(btn) => {
          signInWithGoogleAsync({ navigation });
        }}
      />
    </Container>
  );
};

const signIn = ({ navigation, route }) => {
  const [value, onChangeText] = React.useState("");

  console.log(route);
  return (
    <Container>
      <InputContainer>
        <Text>Nickname :</Text>
        <TextInput
          returnKeyType={"search"}
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
    </Container>
  );
};
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="googleLogin" component={googleLogin} />
    <Stack.Screen name="signIn" component={signIn} />
  </Stack.Navigator>
);
