import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { Stack, router } from 'expo-router';
import { StylesLogin } from '@/components/Styles'

// const navigation = useNavigation()


export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
      <Text style={StylesLogin.title}>Inicia sesión en tu cuenta</Text>
        <Stack.Screen options={ { headerShown:false } } />

        <View style={styles.item}>
          <Button 
          buttonStyle={{paddingHorizontal:45, borderRadius:20}}
          title="Login"
          onPress={() => router.replace("Login")}
          />
          <Button 
          buttonStyle={{paddingHorizontal:25, borderRadius:20}}
          title="Register Now"
          // onPress={() => navigation.navigate("Register")} 
          /> 
        </View>
          <Button 
            buttonStyle={{paddingHorizontal:25, borderRadius:20}}
            title="Setting"
            // onPress={() => navigation.navigate("Configuracion")} 
          />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'stretch',
    margin: 'auto'
  },
  text:{
    color:'#fff'
  },
  item:{
    display: 'flex',
    flexDirection: 'row',
    gap:25,
    marginVertical: 10
  }
});
