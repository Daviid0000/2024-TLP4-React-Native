import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StylesLogin, StylesRegister } from './Styles';
import { UserContext } from './userContext';
import { createUser } from "./Validations";
import CheckboxComponent from "./CheckBox";
import MyButton from "./Icons";
import { Button } from '@rneui/base';

const Register = () => {

    const navigation = useNavigation()

    const {users, setUsers} = useContext(UserContext)
    const [userCreate, setUserCreate] = useState('');
    const [emailCreate, setEmailCreate] = useState('');
    const [passCreate, setPassCreate] = useState('');



    return(
        <>
            <View style={StylesRegister.container}>
                <Stack.Screen options={ { headerShown:false } } />
                <Text style={StylesLogin.title}>Crea una cuenta</Text>
                <View >
                    <TextInput
                        style={StylesRegister.input}
                        placeholder="Usuario"
                        onChangeText={textoNuevo => setUserCreate(textoNuevo)}
                        value={userCreate}
                    />
                    <TextInput
                        style={StylesRegister.input}
                        placeholder="Email"
                        onChangeText={emailNuevo => setEmailCreate(emailNuevo)}
                        value={emailCreate}
                    />
                    <TextInput
                        style={StylesRegister.input}
                        placeholder="Contraseña"
                        onChangeText={contraseña => setPassCreate(contraseña)}
                        value={passCreate} 
                        secureTextEntry
                    />
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <CheckboxComponent/>
                    <Text>Terminos y Condiciones</Text>
                </View>
                </View>

                <Button 
                buttonStyle={StylesLogin.button}
                title="Registrate ahora"
                onPress={() => createUser(emailCreate, users, userCreate, passCreate, setUsers, navigation, setPassCreate, setEmailCreate, setUserCreate)} 
                />
                <Text>O registrarte con una red social</Text>
                <View style={{display:'flex', flexDirection:'row', gap: 5}}>
                    <MyButton iconName="logo-facebook" iconSize={15} />
                    <MyButton iconName="logo-google" iconSize={15} />
                </View>

                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text>Ya tienes una cuenta? Ingresa aquí</Text>
                </Pressable>

            </View>
        </>
    )
}

export default Register