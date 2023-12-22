import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

const iFrameStyle = `
        <style>
          html {
            overflow-y: hidden;
            overflow-x: hidden;
            height: 100%;
          }
          body {
            background-color: black;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
        </style>
      `;
export const buildHTML = (source) => `
      <!DOCTYPE html>
      <html>
        <head>
          ${iFrameStyle}
          <meta name="viewport" content="initial-scale=1">
        </head>
        <body><iframe width="${width}" height="${height}" src="${source}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></body>
      </html>
      `;

const YoutubePlayer = ({ source }) => {
  return (
    <SafeAreaView>
      <View style={styles.videoContainer}>
        <WebView
          source={{ html: buildHTML(source) }}
          allowsFullscreenVideo={false}
          allowsInlineMediaPlayback
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  videoContainer: {
    height: height,
  },
});

export default YoutubePlayer;
