import { FlatList, View } from "react-native";
import ButtonSquare from "../../components/ButtonSquare";
import AppStylesheet from "../../components/AppStylesheet";

const MenuItems = [
  {
    key: 1,
    title: "Videos",
    icon: "film-outline",
    redirectTo: "Videos",
  },
  {
    key: 2,
    title: "Cursos",
    icon: "today-outline",
    redirectTo: "Cursos",
  },
  {
    key: 3,
    title: "Unidades",
    icon: "navigate-circle-outline",
    redirectTo: "Unidades",
  },
  {
    key: 4,
    title: "Vagas",
    icon: "megaphone-outline",
    redirectTo: "Vagas",
  },
  {
    key: 5,
    title: "Camera Ao vivo",
    icon: "camera-outline",
    redirectTo: "Camera",
  },
  {
    key: 6,
    title: "Template",
    icon: "camera-outline",
    redirectTo: "Template",
  },
];

export default function Menu({ navigation }) {
  return (
    <View style={AppStylesheet.Container}>
      <FlatList
        numColumns={2}
        data={MenuItems}
        renderItem={({ item }) => (
          <ButtonSquare key={item.key} item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
