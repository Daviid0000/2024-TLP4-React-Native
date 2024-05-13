import { useState } from "react"
import { Button, Text, TextInput, View, Modal, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const navigation = useNavigation()

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const usuarios = [
        {
            name: 'Carmen',
            password:'abc',
        },
        {
            name: 'Valeria',
            password:'abcd',
        },
        {
            name: 'Antonela',
            password:'abcde',
        },
    ]

    const validationUser = () => {
        if(user){
            console.log("Usuario logeado")
        }else{
            console.log("Usuario incorrecto")
        }

    
    }

    return(
        <>
        <View>
            <Text>Iniciar Sesión</Text>
            <TextInput
            placeholder="Username"
            onChangeText={textoNuevo => setUser(textoNuevo)}
            />
            <TextInput
            placeholder="Password"
            onChangeText={contraseña => setPass(contraseña)}
            defaultValue="" />

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
           setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Login exitoso</Text>
                <Text style={styles.modalText}>Usuario: {user}</Text>
                <Button
                  title="Ocultar"
                  onPress={() => setModalVisible(!modalVisible)}>
                </Button>
                
              </View>
            </View>
        </Modal> */}
        
        <Button title="Send" onPress={validationUser}/>                    
        {/* <Button title="Sendd" onPress={() => setModalVisible(true)} disabled={false}/>     */}

        
        </View>
        </>
    )
}




const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default Login
