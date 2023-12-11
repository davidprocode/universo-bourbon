import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonCurso = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        Alert.alert(item.title, item.Descrição, "positive", {});
      }}
    >
      <Ionicons name={item.icon} color={"#fff"} size={50} />
      <Text style={style.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCurso;

const style = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",

    margin: 20,
  },
  text: { fontSize: 20, color: "#fff", textAlign: "center" },
});
