import { Stack } from 'expo-router';
import UserProvider from '../app/userContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="Home" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
  );
}
