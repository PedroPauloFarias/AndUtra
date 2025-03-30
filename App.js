import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importação das paginas//
import Homes from "./src/pages/Homes";
import Sobre from "./src/pages/Sobre";
import Recomendados from "./src/pages/Recomendados";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homes">
        <Stack.Screen
         name="Homes" 
          component={Homes}
          options={{title: 'AndUtra'}}
        />
        <Stack.Screen
          name="Sobre" 
          component={Sobre} 
        />
        <Stack.Screen
        name="Recomendados"
        component={Recomendados}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
