import React, { useState, useRef } from "react";

import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function App() {
  const [userName, setUserName] = useState("하창언");
  const change = (text) => {
    setUserName(text);
  };
  const ttt = useRef(0);

  const click = () => {};
  return (
    <>
      <View style={styles.container}>
        <View
          ref={ttt}
          style={{
            backgroundColor: "blue",
            height: 40,
            width: 110,
            zIndex: ttt,
          }}
        >
          <Text>{userName}</Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            height: 40,
            width: 100,
            position: "absolute",
          }}
        >
          <TextInput
            placeholder={userName}
            style={{
              fontSize: 17,
            }}
            onChangeText={(Text) => change(Text)}
          />
        </View>
      </View>
      <View style={{ margin: 40 }}>
        <Button title="click" style={{ marginTop: 50 }} onPress={click} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
