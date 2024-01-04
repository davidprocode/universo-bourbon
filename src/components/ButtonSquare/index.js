import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppStylesheet, { primaryColor, iconSize } from "../AppStylesheet";

const ButtonSquare = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={AppStylesheet.ButtonSquare}
      onPress={() => navigation.navigate(item.redirectTo)}
    >
      <Ionicons name={item.icon} color={primaryColor} size={iconSize} />
      <Text style={AppStylesheet.Title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSquare;

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
