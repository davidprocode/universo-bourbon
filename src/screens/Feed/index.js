import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import FeedItem from "./FeedItem";

export default function Feed() {
  const data = [
    {
      id :1,
      title :'Video 01',
      Description :'Description Video 01',
      url :'https://i.imgur.com/zkZiIrW_lq.mp4',
    },
    {
      id :2,
      title :'Video 02',
      Description :'Description Video 02',
      url :'https://i.imgur.com/gP8hngA_lq.mp4',
    },
    {
      id :3,
      title :'Video 03',
      Description :'Description Video 03',
      url :'https://i.imgur.com/WXFwBwS_lq.mp4',
    },
  ];

  return (
    <View>
      <FlatList
        key={data.id}
        data={data}
        renderItem={FeedItem}
        pagingEnabled
        decelerationRate={"fast"}
      />
    </View>
  );
}

