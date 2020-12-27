import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View ,Button} from "react-native";
import axios from "axios";
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';

export default function App() {
  const abc =async () => {
    const URL = `https://momelet.net/apple/login?redirect_uri=${Linking.makeUrl(
    ''
  )}`;

  console.log('screen:Login 리다이렉트 url', Linking.makeUrl(''));

  const _removeLinkingListener = () => {
    Linking.removeEventListener('url', _handleRedirect);
  };
  const _handleRedirect = async (event) => {
    if (Constants.platform.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

    const data = Linking.parse(event.url);

    console.log(data)
  };
  const addLinkingListener = () => {
    Linking.addEventListener('url', _handleRedirect);
  };
  const supported = await Linking.canOpenURL(URL);

  if (supported) {
    try {
      addLinkingListener();

      const result = await WebBrowser.openBrowserAsync(URL);

      if (Constants.platform.ios) {
        _removeLinkingListener();
      }

      console.log('Login Success');
    } catch (error) {
      console.error('error in login', error);
    }
  }
  }

  return (
    <View style={styles.container}>
      <Button title="gg" onPress={abc}/>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
