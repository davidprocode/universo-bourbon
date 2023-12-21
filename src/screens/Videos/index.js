import * as React from "react";
import { FlatList, View } from "react-native";
import shuffle from "../../utils/shuffle";
import FeedItem from "./FeedItem";
import YoutubePlayer from "./YoutubePlayer";

export default function Videos({ navigation }) {
  return (
    <View>
      <YoutubePlayer />
    </View>
  );
}
