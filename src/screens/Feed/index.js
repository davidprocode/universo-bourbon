import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

export default function Feed() {
  const data = [1, 2, 3, 4, 5];

  const renderItem = ({ item, index }) => {
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
        <Text>Hello from item{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
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
