import * as React from "react";
import { FlatList, View } from "react-native";
import AppStylesheet from "../../components/AppStylesheet";
import VideoPlayer from "../../components/VideoPlayer";

export default function Videos({ navigation }) {
  const DATA = [
    {
      key: 1,
      title: "Title 01",
      dir: path.join(__dirname, "/assets/videos/video-01.mp4"),
    },
    {
      key: 2,
      title: "Title 02",
      dir: path.join(__dirname, "/assets/videos/video-02.mp4"),
    },
    {
      key: 3,
      title: "Title 03",
      dir: path.join(__dirname, "/assets/videos/video-03.mp4"),
    },
  ];

  return (
    <View style={AppStylesheet.Container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <VideoPlayer key={item.key} title={item.title} dir={item.dir} />
        )}
      />
    </View>
  );
}
