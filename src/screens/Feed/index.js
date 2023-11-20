import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";

import FeedItem from "./FeedItem";
import shuffle from "../../utils/shuffle";
import ModalMenu from "../../components/ModalMenu";

export default function Feed() {
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
      <Pressable style={[styles.button, styles.buttonOpen]}>
        <Text style={styles.textStyle}>MENU</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
    bottom: 15,
    borderRadius: 20,
    padding: 10,
  },
});
