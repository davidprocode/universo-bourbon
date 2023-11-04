import { StyleSheet, Text, View, TouchableOpacity, useRef } from 'react-native';
import * as React from 'react';
import { Video, ResizeMode } from 'expo-av';
import BackgroundVideo from '../../../assets/background.mp4'

export default function Home({navigation}) {
  const video = React.useRef(null);
  video.current.playAsync()

  return (
    <View style={styles.container}>      
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={BackgroundVideo}
        isLooping={true}
        volume={0}
        resizeMode={ResizeMode.COVER}
      />
      <Text style={styles.title}>Seja bem vindo ao Universo Bourbon!</Text>      
      <TouchableOpacity 
      style={styles.button}
      onPress={() =>navigation.navigate('About', {name: 'Jane'})}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:50,
    width:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0859c6',
    padding: 10,
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    color: '#fff',
    fontSize: 50,
    title: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});
