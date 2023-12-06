import { FlatList, StyleSheet, View } from "react-native";
import ButtonMenu from "../../components/ButtonMenu";

const MenuItems = [
  {
    title: "Videos",
    icon: "film-outline",
    redirectTo: "Videos",
  },
  {
    title: "Cursos",
    icon: "today-outline",
    redirectTo: "Cursos",
  },
  {
    title: "Unidades",
    icon: "navigate-circle-outline",
    redirectTo: "Unidades",
  },
  {
    title: "Vagas",
    icon: "megaphone-outline",
    redirectTo: "Vagas",
  },
];

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={MenuItems}
        renderItem={({ item }) => (
          <ButtonMenu item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
