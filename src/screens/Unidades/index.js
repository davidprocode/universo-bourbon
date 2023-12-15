import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonUnidades from "../../components/ButtonUnidades";

export default function Unidades({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonUnidades title="Berimbal" />
      <ButtonUnidades title="Paripe" />
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
});
