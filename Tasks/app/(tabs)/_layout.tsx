import React from 'react';
import { Stack } from 'expo-router';


export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="index"
        
      />
      <Stack.Screen
        name="explore"
        
      />
      <Stack.Screen name=''/>


    </Stack>
    
  );
}
