import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Video, ResizeMode } from 'expo-av';


export default function FeedItem({ item, index }){
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
        <Text style={{color:"#fff"}}>{item.Description}</Text>
      </View>
    )
  };