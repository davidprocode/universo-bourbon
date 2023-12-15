import { Video } from "expo-av";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackgroundVideo from "../../../assets/background.mp4";

export default function ButtonUnidades() {
  const videoRef = React.useRef(null);

  return (
    <TouchableOpacity style={styles.container}>
      <Video
        ref={videoRef}
        onLoad={() => videoRef.current.playAsync()}
        style={styles.video}
        source={BackgroundVideo}
        resizeMode="cover"
      />
      <Text style={styles.text}>Unidade 01</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    zIndex: 99,
  },
});
