import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function FeedItem({ item }) {
  const videoFeedRef = useRef(null);
  const handlePlayVideo = () => {
    videoFeedRef.current.playAsync();
  };

  return (
    <View style={styles.container}>
      <Video
        onLoad={handlePlayVideo}
        ref={videoFeedRef}
        source={{ uri: item.url }}
        resizeMode={ResizeMode.COVER}
        isLooping={true}
        style={styles.video}
      />
      <View style={styles.info}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={[styles.text, styles.description]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  info: {
    flex: 1,
    width: "100%",
    padding: 30,
    position: "absolute",
    bottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#fff",
    fontSize: 17,
  },
});
