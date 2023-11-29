import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonMenu = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigation.navigate(item.redirectTo)}
    >
      <Ionicons name={item.icon} color={"#fff"} size={50} />
      <Text style={style.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const style = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  text: { fontSize: 20, color: "#fff" },
});
