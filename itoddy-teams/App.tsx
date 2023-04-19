import { Groups } from "@screens/Groups";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { StatusBar } from "react-native";
import { Loading } from "./src/Components/Loading";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
