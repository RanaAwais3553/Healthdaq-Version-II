import React, { useState } from "react";
import { View, Pressable, Modal, Text } from "react-native";
import { Icon } from 'react-native-elements';
import styles from "../../../styles";
function ModalResponse({ modalToggleState, successed, modalButton }) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={{ flex: 1, position: "absolute", ...styles.flexCenter }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, ...styles.flexCenter }}>
          <View style={styles.modalMessageContainer}>
            <Icon type="ionicon" name="checkmark-circle-sharp" size={25} color="#468097" />
            <Text style={{ color: "#468097" }}>
              {successed ? successed : "Already Scanned"}
            </Text>
            {modalButton && (
              <Pressable
                style={[styles.modalButton, styles.modalButtonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  modalToggleState();
                }}
              >
                <Text style={styles.modalTextStyle}>Ok</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalResponse;
