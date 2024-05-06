import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import OtraVentana from './views/OtraVentana';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' options={{headerShown: false}} component={Home}/>
          <Stack.Screen name='OtraVentana' options={{headerShown: false}} component={OtraVentana}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


