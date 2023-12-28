import { ResizeMode, Video } from "expo-av";
import { useState, useCallback, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import ReactPlayer from "react-player";

export const buildHTML = (videoId) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="initial-scale=1">
        </head>
        <body>
        <script src="https://geo.dailymotion.com/player.js" data-playlist="x79dlo"></script>
        </body>
      </html>
      `;

const DailymotionPlayer = (url) => {
  return <WebView source={{ html: buildHTML() }} />;
};

export default function Player({ item }) {
  return (
    <View style={styles.container}>
      <DailymotionPlayer url={item.url} />
      <View style={styles.info}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={[styles.text, styles.description]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  info: {
    flex: 1,
    width: "100%",
    padding: 30,
    position: "absolute",
    bottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#fff",
    fontSize: 17,
  },
});
