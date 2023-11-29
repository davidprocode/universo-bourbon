import { FlatList, StyleSheet, View } from "react-native";
import ButtonMenu from "../../components/ButtonMenu";

const MenuItems = [
  {
    title: "Videos",
    icon: "film-outline",
    redirectTo: "Feed",
  },
  {
    title: "Informações",
    icon: "information-circle-outline",
    redirectTo: "About",
  },
  {
    title: "Localização",
    icon: "navigate-circle-outline",
    redirectTo: "About",
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
        keyExtractor={(item) => {
          item.index;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
