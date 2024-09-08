import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { onboardingSwiperData } from "../../constants/constant";
import { commonStyles } from "../../styles/common/common.styles";
import { styles } from "../../styles/onboarding/onboard";

export default function WelcomeIntroScreen() {
   const [fontsLoaded] = useFonts({
      Raleway_700Bold,
      Nunito_400Regular,
      Nunito_700Bold,
   });

   if (!fontsLoaded) {
      return <Text>Loading...</Text>;
   }

   const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
      <LinearGradient
         colors={["#E5Ecf9", "#F6F7f9", "#E8EEF9"]}
         style={{ flex: 1, paddingHorizontal: 10 }}
      >
         <View style={{ marginTop: 80 }}>
            <Image source={item.image} style={{ alignSelf: "center", marginBottom: 30 }} />
            <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
               {item.title}
            </Text>
            <View style={{ marginTop: 15 }}>
               <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                  {item.description}
               </Text>
               <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                  {item.sortDescrition}
               </Text>
               <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                  {item.sortDescrition2}
               </Text>
            </View>
         </View>
      </LinearGradient>
   );

   return (
      <AppIntroSlider
         renderItem={renderItem}
         data={onboardingSwiperData}
         onDone={() => router.push("/login")}
         onSkip={() => router.push("/login")}
         renderNextButton={() => (
            <View style={[styles.welcomeButtonStyle]}>
               <Text style={[styles.buttonText, { fontFamily: "Raleway_700Bold" }]}>Next</Text>
            </View>
         )}
         renderDoneButton={() => (
            <View style={styles.welcomeButtonStyle}>
               <Text style={[styles.buttonText, { fontFamily: "Raleway_700Bold" }]}>Next</Text>
            </View>
         )}
         showSkipButton={false}
         dotStyle={commonStyles.dotStyle}
         bottomButton={true}
         activeDotStyle={commonStyles.activeDotStyle}
      />
   );
}
