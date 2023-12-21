import * as React from "react";
import { FlatList, View } from "react-native";
import shuffle from "../../utils/shuffle";
import FeedItem from "./FeedItem";
import YoutubePlayer from "./YoutubePlayer";

export default function Videos({ navigation }) {
  const DATA = [
    {
      id: "qZ3KLnp_3VM",
      title: "First Item",
    },
    {
      id: "qZ3KLnp_3VM",
      title: "Second Item",
    },
    {
      id: "qZ3KLnp_3VM",
      title: "Third Item",
    },
  ];
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <YoutubePlayer videoId={item.id} />}
        keyExtractor={(item) => item.id}
      />
      <YoutubePlayer />
    </View>
  );
}
