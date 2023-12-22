import * as React from "react";
import { FlatList, View } from "react-native";
import YoutubePlayer from "./YoutubePlayer";

export default function Videos({ navigation }) {
  const DATA = [
    {
      id: "U08w6opWr9A",
      title: "First Item",
    },
    {
      id: "iatrdwnb79U",
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
        scrollEnabled
        pagingEnabled
      />
    </View>
  );
}
