import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';

export default function App() {
  // const [isClicked]
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
      
        <LottieView style={{backgroundColor:"white",height:200,borderWidth:1}}  source={require("./assets/heartbtn.json")} ref={heartRef} loop={false} resizeMode="contain" onAnimationFinish={()=>{console.log("finish")}} autoPlay loop/>
        {/* <AntDesign name="heart" size={24} color="black" /> */}
        <TouchableOpacity style={{width:40,height:40,backgroundColor:"red",position:"absolute"}} />
      
      {/* <Button title="start" onPress={startButtonPress}/>
      <Button title="reset" onPress={resetButtonPress}/> */}
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
