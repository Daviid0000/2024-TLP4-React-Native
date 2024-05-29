import { Stack } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StylesLogin } from "./Styles";
import { ComponentModal } from "./Modal";
import { validationUser } from "./validations";

const Index = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const usuarios = [
    { name: 'Carmen', password:'abc', },
    { name: 'Valeria', password:'abcd', },
    { name: 'Antonela', password:'abcde', },
  ];


  return (
    <View style={StylesLogin.centeredView}>
      <Stack.Screen options={{title:"Login"}} />
      <Stack.Screen/>
      <Text style={StylesLogin.title}>Iniciar Sesión</Text>
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
        defaultValue=""
        value={pass} 
        secureTextEntry/>
      <Button 
      title="Send" 
      onPress={() => validationUser(user, pass, usuarios, navigation, setModalVisible, setPass, setUser)} />

      <ComponentModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
}


export default Index;
