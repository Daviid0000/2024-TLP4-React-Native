import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/views/Home';
import { Login } from './src/views/Login';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return(
  <>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' options={{headerShown: false}} component={Home}/>
      <Stack.Screen name='login' options={{headerShown: false}} component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
  <StatusBar style='auto'/>
  </>
  ) 
};

