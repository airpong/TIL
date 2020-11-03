import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const heartRef = useRef()
  const startButtonPress = () => {
    // console.log(heartRef.current)
    heartRef.current.play()
    // heartRef.current.reset()
    
  }
  const resetButtonPress = () => {
    heartRef.current.reset()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startButtonPress}>
        <LottieView source={require("./assets/hearticon.json")} style={{width:200,height:200}} ref={heartRef} loop={false} onAnimationFinish={()=>{console.log("finish")}}/>
      </TouchableOpacity>
      {/* <Button title="start" onPress={startButtonPress}/> */}
      <Button title="reset" onPress={resetButtonPress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
