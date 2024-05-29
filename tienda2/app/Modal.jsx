import React from "react";
import { Modal, Text, View, Button } from "react-native";
import { StylesLogin } from "./Styles";

export const ComponentModal = ({visible, setVisible}) => {

    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
           setVisible(!visible);
          }}>
            <View style={StylesLogin.centeredView}>
              <View style={StylesLogin.modalView}>
                <Text style={StylesLogin.modalText}>Error de Login</Text>
                <Text style={StylesLogin.modalText}>Usuario o contraseña incorrecta</Text>
                <Button
                  title="Cerrar"
                  onPress={() => setVisible(!visible)}>
                </Button>
                
              </View>
            </View>
        </Modal>
    )
}