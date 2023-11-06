import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { Video, ResizeMode } from 'expo-av';
import { useRef, useState } from 'react';


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

  const renderItem = ({ item, index }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
      <View
        style={[
          { 
            flex: 1,
            height: Dimensions.get('window').height,
            width: '100%',
          
          },
          index % 2 == 0
            ? { backgroundColor: "blue" }
            : { backgroundColor: "pink" },
        ]}
      >
        <Text style={{color:"#fff", fontWeight: "bold"}}>{item.title}</Text>
        <Text style={{color:"#fff", }}>{item.Description}</Text>
        <Video
        ref={video}
        source={{
          uri: item.url,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={data.id}
        data={data}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate={"fast"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
