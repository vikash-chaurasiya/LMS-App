import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/onboarding/onboard";
import { router } from "expo-router";
import { useFonts } from "expo-font";

export default function OnBoardingScreen() {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={["#E5Ecf9", "#F6F7f9"]}
      style={{ alignItems: "center", justifyContent: "center"}}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("../../assets/onboarding/shape_3.png")}
          />
          <Text
            style={[
              styles.titleText,
              { fontFamily: "Raleway_700Bold", color: "green" },
            ]}
          >
            Start Learning With
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("../../assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("../../assets/onboarding/shape_6.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Becodemy
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Explore a variety of intrective lesson,
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Video, quizze & assignment
          </Text>
        </View>
        <Pressable
          style={styles.buttonWrapper}
          onPress={() => router.push("/(routes)/welcome-intro")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
            Getting Started
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
