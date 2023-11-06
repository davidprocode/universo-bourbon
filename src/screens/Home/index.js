import { StyleSheet, Text, View, TouchableOpacity, useRef } from "react-native";
import * as React from "react";
import { Video, ResizeMode } from "expo-av";
import BackgroundVideo from "../../../assets/background.mp4";

import AnimatedView from "../../components/AnimatedView";

export default function Home({ navigation }) {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        onLoad={() => {
          video.current.playAsync();
        }}
        ref={video}
        style={styles.backgroundVideo}
        source={BackgroundVideo}
        isLooping={true}
        volume={0}
        resizeMode={ResizeMode.COVER}
      />
      <Text style={styles.title}>Seja bem vindo ao Universo Bourbon!</Text>
      <AnimatedView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Feed")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </AnimatedView>
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
  button: {
    height: 50,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0859c6",
    padding: 10,
    margin: 10,
    fontSize: "15px",
    fontfamily: "Arial",
    backgroundColor: "rgba(74,144,226,1)",
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 1,
    width: 170,
    height: 70,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    color: "#fff",
    fontSize: 50,
    padding: 14,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
