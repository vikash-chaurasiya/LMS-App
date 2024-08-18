import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useFonts, Raleway_700Bold, } from '@expo-google-fonts/raleway'
import { Nunito_700Bold, Nunito_400Regular } from '@expo-google-fonts/nunito'
import {LinearGradient} from 'expo-linear-gradient'
import { styles } from '../../styles/onboarding/onboard'

export default function OnBoardingScreen() {

  let [fontLoaded,fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  })

  if(!fontLoaded && !fontError){
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9","#F6F7F9"]}
      style={{flex :1,alignItems : "center",justifyContent : "center"}}
    >
      <View style={styles.firstContainer}>
          <View>
            <Image source={require("../../assets/logo.png")} style={styles.logo}/>
          </View>
          <View style={styles.titleWrapper}>
            <Image
              style={styles.titleTextShape1}
              source={require("../../assets/onboarding/shape_3.png")}
            />
          </View>
      </View>
    </LinearGradient>
  )
}
