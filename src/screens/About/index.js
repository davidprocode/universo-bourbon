import * as React from "react";
import { StyleSheet, View } from "react-native";

import ModalMenuButton from "../../components/ModalMenuButton";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <ModalMenuButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0",
  },
});
