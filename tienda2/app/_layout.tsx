import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Home"/>
      <Stack.Screen name="AdoptarGatos"/>
      <Stack.Screen name="AdoptarPerros"/>
    </Stack>
  );
}
