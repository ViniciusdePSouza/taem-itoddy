import { Groups } from "@screens/Groups";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from './src/theme'
// import { Loading } from '@components/Loading';
import { ActivityIndicator, StatusBar } from "react-native";
import { Loading } from "./src/Components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
       {fontsLoaded ?  <Groups /> : <Loading/>}
    </ThemeProvider>
  );
}

