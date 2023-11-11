import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function FeedItem({ item, index }) {
  return (
    <View
      style={[
        {
          flex: 1,
          height: Dimensions.get("window").height,
          width: "100%",
        },
        index % 2 == 0
          ? { backgroundColor: "blue" }
          : { backgroundColor: "pink" },
      ]}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          position: "absolute",
          padding: 25,
          bottom: 100,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "#fff", fontSize: 16 }}>{item.Description}</Text>
      </View>
    </View>
  );
}
