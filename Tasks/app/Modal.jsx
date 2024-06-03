import React, { useState } from "react";
import { Modal, Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "@rneui/base";
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

export const ComponentModalTask = ({visible, setVisible, addTask }) => {

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [autor, setAutor] = useState('');
  const [fecha, setFecha] = useState('');

  const handleCreateTask = () => {
    const newTask = { name: titulo, description: descripcion, author: autor, date: fecha };
    addTask(newTask);
    setVisible(false);
    setTitulo('');
    setDescripcion('');
    setAutor('');
    setFecha('');
};
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
              <Text style={styles.subtitle}>Cree su tarea</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setTitulo(texto)} 
                  placeholder='Título' 
                  value={titulo}
                />

                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setDescripcion(texto)} 
                  placeholder='Descripción'
                  value={descripcion} 
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setAutor(texto)} 
                  placeholder='Autor' 
                  value={autor}
                />
                <TextInput 
                  style={styles.input} 
                  onChangeText={texto => setFecha(texto)} 
                  placeholder='Fecha' 
                  value={fecha}
                />
              <Button
                buttonStyle={styles.button}
                title="Crear"
                onPress={handleCreateTask}>
              </Button>
              
            </View>
          </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  title:{
      fontSize: 20,
      textAlign: 'center'
  },
  subtitle: {
      fontSize:16,
      borderBottomWidth:2,
      borderColor: '#2231'
  },
  input: {
      borderBottomWidth: 2,
      borderColor: '#2231',
      marginHorizontal:15,
      paddingVertical: 10,
      fontSize: 20
  },
  button:{
    borderRadius: 20,
    width:100,
    marginTop:10
  }
})