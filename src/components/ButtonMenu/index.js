import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonMenu = () => {
  return (
    <TouchableOpacity style={style.container}>
      <Ionicons name="menu" size={50} />
      <Text>Menu</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const style = StyleSheet.create({
  container: { backgroundColor: "blue", height: 150, width: 150, margin: 20 },
});
