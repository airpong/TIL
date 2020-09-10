import * as React from "react";
import { Button, Image, View, Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
const MY_SECURE_AUTH_STATE_KEY = "MySecureAuthStateKey";
const saveToken = async () => {
  const saveResult = await SecureStore.setItemAsync(
    MY_SECURE_AUTH_STATE_KEY,
    "secureKey"
  );

  console.log("saveResult: ", saveResult);
};
const loadToken = async () => {
  const loadToken = await SecureStore.getItemAsync(MY_SECURE_AUTH_STATE_KEY);
  console.log("loadToken: ", loadToken);
};
export default () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{ width: 100, height: 100 }}
        title="토큰저장"
        onPress={saveToken}
      ></Button>
      <Button
        style={{ width: 100, height: 100 }}
        title="토큰 가져오기"
        onPress={loadToken}
      ></Button>
    </View>
  );
};
