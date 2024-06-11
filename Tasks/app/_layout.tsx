import { Stack } from 'expo-router';
import UserProvider from '../app/userContext';

export default function RootLayout() {
  return (

    <UserProvider>
      <Stack screenOptions={{
        statusBarTranslucent: false,
        navigationBarHidden: true,
        contentStyle: {
          backgroundColor: '#fff'
        }
      }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="Home" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="Ajustes" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
  );
}
