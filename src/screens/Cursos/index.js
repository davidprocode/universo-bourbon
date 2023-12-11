import { FlatList, StyleSheet, Text, View } from "react-native";
import ButtonCurso from "../../components/ButtonCurso";

import CursosList from "./CursosList.json";

export default function Cursos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pagina em construção...</Text>
      <View>
        <FlatList
          numColumns={2}
          data={CursosList}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ButtonCurso key={item.key} item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
  },
});
