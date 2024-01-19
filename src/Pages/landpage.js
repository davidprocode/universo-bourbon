import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LandPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Venha conhecer nosso universo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00f",
  },
  text: {
    alignSelf: "center",
    fontSize: 64,
    fontStyle: "italic",
    color: "#fff",
  },
});
