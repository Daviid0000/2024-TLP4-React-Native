import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native"
const Index = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  
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

  const usuario = usuarios.find((nombre) => nombre.name === user)
  console.log(usuario)
  // if(usuario){
  //   console.log("Usuario correcto:", usuario)
  // }
  // else{
  //   console.log("Usuario incorrecto:", usuario)
  // }
  // usuarios.forEach(nombre => {
  //   if(nombre.name == user){
  //     return console.log("Usuario correcto")
  //   }
  //   else{
  //     return console.log("Usuario Incorrecto")
  //   }
    
  // });
}




  return(
    <View style={styles.centeredView}>
      <Stack.Screen options={{title: "Login"}} />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
        style={styles.subtitle}
        placeholder="Username"
        onChangeText={textoNuevo => setUser(textoNuevo)}
        />
        <TextInput
        style={styles.subtitle}
        placeholder="Password"
        onChangeText={contraseña => setPass(contraseña)}
        defaultValue="" />

        <Button title="Send" onPress={validationUser}/>      
        
    </View>
)
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },

  title: {
    fontSize: 30,

  },

  subtitle: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#2231',
    padding:10,
    margin:10
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 10
  },
  image:{
    width: 200,
    height: '50%'
  }
});

export default Index
