import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Nunito_400Regular,Nunito_700Bold } from "@expo-google-fonts/nunito";

export default function RootLayoutNav() {

  const [loggedIn,setLoggedIn] = useState(false);

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(()=>{
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded])


  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(routes)/welcome-intro/index"/>
      <Stack.Screen name="(routes)/login/index"/>
      <Stack.Screen name="(routes)/sign-up/index"/>
      <Stack.Screen name="(routes)/forgot-password/index"/>
    </Stack>
  );
}
