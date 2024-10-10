import React, { useState, useContext } from 'react';
import { TextInput, View, Text, Pressable, Image, ImageBackground, ScrollView } from 'react-native';
import { Stack, router } from 'expo-router';
import { StylesLogin } from '@/components/Styles';
import { UserContext } from '@/context/userContext'
import { validationUser } from '@/components/Validations'
import { ComponentModal } from '@/components/Modal'
import {MyButton} from '@/components/Icons'
import { Button, CheckBox } from '@rneui/base';

 const Login = () => {

  const image1 = require('@/img/login.png')

  const { users } = useContext(UserContext)
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>

      <View style={StylesLogin.container}>
      <Stack.Screen options={{headerShown:false}}  />
        <Image source={image1}  style={{width: 270, height: 350, maxHeight: 'auto', maxWidth: 'auto'}}/>

        <View style={{backgroundColor:'#fff', width: '107%', borderRadius:15, padding: 50, top: 45, paddingVertical: 15}}>
            
            <Text style={StylesLogin.title} >Stats Academy</Text>
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

                <Button 
                  buttonStyle={{borderRadius:10, margin: 'auto', width:240}}
                  title="LOGIN"
                  onPress={() => validationUser(user, pass, users, setModalVisible, setPass, setUser)} 
                />

                <View>
                  <CheckBox  title={'Recúerdame'} />
                </View>
                
                <Text style={{textAlign: 'center'}}>O logeate con una red social</Text>
        
                <View style={{display:'flex', flexDirection:'row', gap: 5, margin: 'auto', marginVertical: 10}}>
                  <MyButton iconName="logo-facebook" iconSize={15} />
                  <MyButton iconName="logo-google" iconSize={15} />
                </View>
        
                <Pressable onPress={() => router.push("Register")}>
                  <Text style={{textAlign: 'center'}}>No tienes una cuenta? <Text style={{color:'#33f'}}>Registrate Ahora</Text></Text>
                </Pressable>
        
        </View>
        

      <ComponentModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
    </>
  );
}

export default Login