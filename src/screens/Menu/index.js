import { FlatList, StyleSheet, View } from "react-native";
import ButtonMenu from "../../components/ButtonMenu";

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
];

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={MenuItems}
        renderItem={({ item }) => (
          <ButtonMenu key={item.key} item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
