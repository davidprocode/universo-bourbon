import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

import Feed from "../../screens/Feed";
import ButtonMenu from "../ButtonMenu";

export default function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      {isVisible && (
        <View style={styles.menu}>
          <View style={styles.statusbar}>
            <SafeAreaView>
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={styles.button}
              >
                <Ionicons name="arrow-back" size={18} />
                <Text>Voltar</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View style={styles.wrapMenu}>
            <ButtonMenu />
            <ButtonMenu />
            <ButtonMenu />
            <ButtonMenu />
          </View>
        </View>
      )}

      <View style={styles.body}>
        <TouchableOpacity
          style={{ position: "absolute", zIndex: 99, left: 30, top: 60 }}
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <Ionicons name="menu" size={40} color="#fff" />
        </TouchableOpacity>
        <View>
          <Feed />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#fff",
    height: 70,
  },
  button: {
    flexDirection: "row",
    marginLeft: 20,
  },
  menu: {
    backgroundColor: "green",
    height: "100%",
    width: "100%",
  },
  wrapMenu: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
});
