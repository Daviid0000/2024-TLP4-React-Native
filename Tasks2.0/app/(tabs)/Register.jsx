import React, { useState, useContext } from 'react';
import { TextInput, View, Text, Pressable, Image } from 'react-native';
import { Stack, router } from 'expo-router';
import { StylesLogin, StylesRegister } from '@/components/Styles';
import { UserContext } from '@/context/userContext'
import { validationUser } from '@/components/Validations'
import { ComponentModal } from '@/components/Modal'
import {MyButton} from '@/components/Icons'
import { Button, CheckBox } from '@rneui/base';

 const Register = () => {

    const image1 = require('@/img/login.png')

    const {users, setUsers} = useContext(UserContext)
    const [userCreate, setUserCreate] = useState('');
    const [emailCreate, setEmailCreate] = useState('');
    const [passCreate, setPassCreate] = useState('');

    const [userError, setUserError] = useState('');
    const [passError, setPassError] = useState('');

    return(
        <>
            <View style={StylesLogin.container}>
                <Stack.Screen options={ { headerShown:false } } />
                <Image source={image1} style={{width: 270, height: 350, maxHeight: 'auto', maxWidth: 'auto', top: 20}} />
                
                <View style={{backgroundColor:'#fff', width: '107%', borderRadius:15, padding: 50, top: 20, paddingVertical:15}}>
                <Text style={StylesLogin.title}>Stats Academy</Text>
                <View >
                    <TextInput
                        style={StylesRegister.input}
                        placeholder="Usuario"
                        onChangeText={textoNuevo => setUserCreate(textoNuevo)}
                        value={userCreate}
                    />
                    {userError ? <Text style={{color: 'red'}}>{userError}</Text> : null}
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
                    {passError ? <Text style={{color: 'red'}}>{passError}</Text> : null}
                </View>

                <Button 
                    buttonStyle={{borderRadius:10, margin: 'auto', width:240}}
                    title="REGISTRO"
                    onPress={() => createUser(emailCreate, users, userCreate, passCreate, setUsers, navigation, setPassCreate, setEmailCreate, setUserCreate, setUserError, setPassError)} 
                />
                    <CheckBox title={'Terminos y Condiciones'} />

                <Text style={{textAlign:'center'}}>O registrarte con una red social</Text>
                <View style={{display:'flex', flexDirection:'row', gap: 5, marginVertical: 10, margin: 'auto'}}>
                    <MyButton iconName="logo-facebook" iconSize={15} />
                    <MyButton iconName="logo-google" iconSize={15} />
                </View>

                <Pressable onPress={() => router.push("Login")}>
                    <Text style={{textAlign:'center'}}>Ya tienes una cuenta? <Text style={{color:'#22f'}}>Ingresa aquí</Text></Text>
                </Pressable>
                </View>
            </View>
        </>
    )
}

export default Register