import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import FeedItem from "./FeedItem";
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";

export default function Feed() {
  const data = [
    {
      id: 1,
      title: "Video 01",
      Description: "Description Video 01",
      url: "https://i.imgur.com/zkZiIrW_lq.mp4",
    },
    {
      id: 2,
      title: "Video 02",
      Description: "Description Video 02",
      url: "https://i.imgur.com/gP8hngA_lq.mp4",
    },
    {
      id: 3,
      title: "Video 03",
      Description: "Description Video 03",
      url: "https://i.imgur.com/WXFwBwS_lq.mp4",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        renderItem={() => {
          const video = useRef(null);
          return (
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "red",
              }}
            >
              <Video
                style={{
                  height: Dimensions.get(screen).height,
                  width: Dimensions.get(screen).width,
                }}
                onLoad={video.current.playAsync()}
                ref={video}
                source={data.url}
                resizeMode={ResizeMode.CONTAIN()}
              />
            </View>
          );
        }}
        pagingEnabled
        decelerationRate={"fast"}
      />
    </View>
  );
}
