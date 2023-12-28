import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View, SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

const buildIFrame = (videoId) => `
        <div id="player"></div>
        <script>
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              title: 'Universo Bourbon',
              height: '100%',
              width: ${width},
              videoId: " ",
              playerVars: { 
                'autoplay': 1,
                'controls': 0,
                'rel': 0,
              },
            });
            MessageInvoker.postMessage('YouTube has loaded');
          }
        </script>
        `;
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
export const buildHTML = (videoId) => `
      <!DOCTYPE html>
      <html>
        <head>
          ${iFrameStyle}
          <meta name="viewport" content="initial-scale=1">
        </head>
        <body>${buildIFrame(videoId)}</body>
      </html>
      `;

const YoutubePlayer = ({ videoId }) => {
  return (
    <View style={styles.videoContainer}>
      <WebView
        source={{ html: buildHTML(videoId) }}
        allowsFullscreenVideo={false}
        allowsInlineMediaPlayback
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  videoContainer: {
    height: height,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});

export default YoutubePlayer;
