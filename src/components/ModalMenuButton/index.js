import { useState } from "react";
import { Pressable, StyleSheet, View, Modal } from "react-native";
import { ButtonIcon } from "./ButtonIcon";
import { Button } from "react-native-paper";

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
          <Button
            icon="information"
            mode="contained"
            style={styles.item}
            onPress={() => navigation.navigate("About")}
          >
            About
          </Button>
        </View>
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <ButtonIcon />
        </Pressable>
      </Modal>

      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <ButtonIcon />
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
    margin: 10,
  },
  item: {
    padding: 20,
    margin: 10,
    fontSize: 40,
    width: "80%",
  },
});
