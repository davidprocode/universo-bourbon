import { FlatList, StyleSheet, Text, View } from "react-native";

import AppStylesheet from "../../components/AppStylesheet";
import ButtonSquare from "../../components/ButtonSquare";

export default function Menu({ navigation }) {
  return (
    <View style={AppStylesheet.Container}>
      <Text style={AppStylesheet.Title}>This is an title</Text>
      <Text style={AppStylesheet.SubTitle}>This is an subtitle</Text>
      <Text style={AppStylesheet.Text}>This is an text</Text>
      <FlatList
        numColumns={2}
        data={[
          {
            key: 1,
            title: "Unidades",
            icon: "navigate-circle-outline",
            redirectTo: "Unidades",
          },
          {
            key: 2,
            title: "Unidades",
            icon: "navigate-circle-outline",
            redirectTo: "Unidades",
          },
          {
            key: 3,
            title: "Unidades",
            icon: "navigate-circle-outline",
            redirectTo: "Unidades",
          },
        ]}
        renderItem={({ item }) => <ButtonSquare key={item.key} item={item} />}
      />
    </View>
  );
}
