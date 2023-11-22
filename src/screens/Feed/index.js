import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import shuffle from "../../utils/shuffle";
import FeedItem from "./FeedItem";

import ModalMenuButton from "../../components/ModalMenuButton";

export default function Feed({ navigation }) {
  const DATA = [
    {
      id: 1,
      title: "Video 01",
      description: "Description Video 01",
      url: "https://i.imgur.com/zkZiIrW_lq.mp4",
    },
    {
      id: 2,
      title: "Video 02",
      description: "Description Video 02",
      url: "https://i.imgur.com/gP8hngA_lq.mp4",
    },
    {
      id: 3,
      title: "Video 03",
      description: "Description Video 03",
      url: "https://i.imgur.com/WXFwBwS_lq.mp4",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={shuffle(DATA)}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={(item) => item.id}
        pagingEnabled
        decelerationRate={"fast"}
      />
      <ModalMenuButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
