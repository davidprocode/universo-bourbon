import * as React from "react";
import { Dimensions, FlatList, View } from "react-native";
import Player from "./Player";
import WebView from "react-native-webview";

export const buildHTML = () => `
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
        backgroundColor: "red",
      }}
    >
      <WebView
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{
          html: buildHTML(),
        }}
      />
    </View>
  );
}
