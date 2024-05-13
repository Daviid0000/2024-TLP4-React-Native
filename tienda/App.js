import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import OtraVentana from './views/OtraVentana'; 
import Login from './views/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login'  component={Login}/>
          <Stack.Screen name='home' component={Home}/>
          <Stack.Screen name='OtraVentana'  component={OtraVentana}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


