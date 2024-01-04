import * as React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import AppStylesheet from "../../components/AppStylesheet";

export default function VideoPlayer({ key, title, dir }) {
  const videoRef = React.useRef();
  return (
    <View style={AppStylesheet.Container}>
      <Video
        style={AppStylesheet.VideoPlayer}
        onLoad={() => {
          videoRef.current.playAsync();
        }}
        ref={videoRef}
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        source={dir}
      />
    </View>
  );
}
