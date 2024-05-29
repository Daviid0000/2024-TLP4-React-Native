// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./views/Home";
// import Index from "./app/index";

// const Stack = createNativeStackNavigator();

// const App = () => {
    
//     return(

//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Index">
//                 <Stack.Screen name="Index" component={Index} />
//                 <Stack.Screen name="Home" component={Home} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default App

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/Home";
import Index from "./app/index";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
