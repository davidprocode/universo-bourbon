import * as React from "react";
import { Dimensions, FlatList, View } from "react-native";
import Player from "./Player";
import WebView from "react-native-webview";
import { Video, ResizeMode } from "expo-av";
import YoutubePlayer from "./YoutubePlayer";

export const iframeString = `<iframe frameborder="0" type="text/html" src="https://geo.dailymotion.com/player.html?video=x84sh87&mute=true"></iframe>`;

export const buildHTML = (iframeString, bodyStyles) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="initial-scale=1">
        </head>
        <body style=${bodyStyles}>
        ${iframeString}
        </body>
      </html>
      `;

export default function Videos({ navigation }) {
  const DATA = [
    {
      id: "1",
      title: "First Item",
      url: "https://www.dailymotion.com/video/x78z1ql",
    },
    {
      id: "2",
      title: "Second Item",
      url: "https://www.dailymotion.com/video/x78z1ql",
    },
    {
      id: "3",
      title: "Third Item",
      url: "https://www.dailymotion.com/video/x78z1ql",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        backgroundColor: "blue",
      }}
    >
      <YoutubePlayer
        source={"PLhVh83pUx3yD0H7LBx_mz0IaM1Qv79uDm&si=F1W9b5QKMbf4PWyl"}
      />
    </View>
  );
}
