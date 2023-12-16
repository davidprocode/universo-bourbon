import { Video } from "expo-av";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackgroundVideo from "../../../assets/background.mp4";

export default function ButtonUnidades({ title }) {
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>Instituto Bourbon de Educação</Text>
        <Text style={styles.subTitle}>{title}</Text>
      </View>
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
  textContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#fff", fontSize: "25px" },
  subTitle: { color: "#fff", fontSize: "25px", fontWeight: "bold" },
});
