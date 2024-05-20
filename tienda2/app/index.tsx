import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Login'}} />
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Iniciar sesión</Text>
    </View>
    </>
  );
}