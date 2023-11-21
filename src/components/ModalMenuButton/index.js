import { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { ButtonText } from "./ButtonText";

export default function ModalMenuButton({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        style={[styles.button]}
      >
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.modalText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={styles.modalText}>Feed</Text>
          </TouchableOpacity>
        </View>
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <ButtonText />
        </Pressable>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <ButtonText />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 10,
    color: "#fff",
    backgroundColor: "green",
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 99,
  },
  modalText: {
    fontSize: 18,
  },
  list: {
    alignItems: "center",
    margin: 40,
  },
  item: {
    width: "100%",
    margin: 10,
    padding: 20,
    backgroundColor: "#00e6f6",
  },
});
