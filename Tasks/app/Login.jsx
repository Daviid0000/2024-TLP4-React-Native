import React, { useState, useContext } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StylesLogin } from './Styles';
import { UserContext } from './userContext';
import { validationUser } from './Validations';
import { ComponentModal } from './Modal';
import { Button } from '@rneui/base';

function HomeScreen() {

  const navigation = useNavigation();

  const { users } = useContext(UserContext)
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModalVisible] = useState(false);



  return (
    <>
      <View style={StylesLogin.centeredView}>
        <Stack.Screen options={{title:"Login"}} />
        <Stack.Screen/>
            <Text style={StylesLogin.title}>Bienvenido</Text>
            <Text >Inicia sesión en tu cuenta</Text>
                <TextInput
                    style={StylesLogin.subtitle}
                    placeholder="Username"
                    onChangeText={textoNuevo => setUser(textoNuevo)}
                    value={user}
                />
                <TextInput
                    style={StylesLogin.subtitle}
                    placeholder="Password"
                    onChangeText={contraseña => setPass(contraseña)}
                    value={pass} 
                    secureTextEntry
                />
            <Text>Ya tienes una cuenta?</Text>
            <Button 
            buttonStyle={StylesLogin.button}
            title="Login"
            onPress={() => validationUser(user, pass, users, navigation, setModalVisible, setPass, setUser)} 
            />
        <Text>O logeate con una red social</Text>
        <Text>No tienes una cuenta? Registrate Ahora</Text>

      <ComponentModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
    </>
  );
}



export default HomeScreen