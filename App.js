import React from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./navigation/StackNavigation";

export default function App() {  

  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>  
      <StackNavigation/>
    </NavigationContainer>
  );
}