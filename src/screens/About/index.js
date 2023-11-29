import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import ModalMenuButton from "../../components/ModalMenuButton";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pagina em construção...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0",
  },
});
