import { ResizeMode, Video } from "expo-av";
import { useState, useCallback, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function FeedItem({ item }) {
  const youtubePlayerRef = useRef();
  const [playing, setPlaying] = useState(true);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // const videoFeedRef = useRef(null);
  // const handlePlayVideo = () => {
  //   videoFeedRef.current.playAsync();

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={Dimensions.get("window").height}
        play={playing}
        videoId={item.videoID}
        ref={youtubePlayerRef}
        forceAndroidAutoplay
        allowWebViewZoom={false}
        onChangeState={(event) => {
          if (event === "ended" && visible) {
            youtubePlayerRef?.current?.seekTo(0, true);
          }
        }}
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
