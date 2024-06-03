import { StyleSheet,View} from 'react-native';
import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={ { headerShown:false } } />
        <View style={styles.item}>
          <Button 
          buttonStyle={{paddingHorizontal:45, borderRadius:20}}
          title="Login"
          onPress={() => navigation.navigate("Login")} 
          />
          <Button 
          buttonStyle={{paddingHorizontal:25, borderRadius:20}}
          title="Register Now"
          onPress={() => navigation.navigate("Register")} 
          />
        </View>
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
    gap:25
  }
});
