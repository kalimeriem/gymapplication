import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../styles/loginSignup";
import FacebookIcon from "../../assets/icons/facebook.svg"
import GoogleIcon from "../../assets/icons/google.svg"
import EyeOnIcon from "../../assets/icons/eye-on.svg"
import EyeOffIcon from "../../assets/icons/eye-off.svg"
import { StatusBar } from "expo-status-bar";

export default function LoginScreen () {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "LeagueSpartan-Light": require("../../assets/fonts/LeagueSpartan-Light.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
			<ScrollView style={{ flexGrow: 1 }}>
        <View style={loginSignup.container}>
					<StatusBar style="light" />
          <View style={loginSignup.title}>
            <Text style={[loginSignup.titleText, loginSignup.scrollTitle]}>Welcome</Text>
          </View>

          <View style={loginSignup.card}>
            <Text style={loginSignup.label}>Email</Text>
            <View style={loginSignup.inputContainer}>
              <TextInput style={loginSignup.input} placeholder="example@example.com" placeholderTextColor="#F739AB" />
            </View>
          
            <Text style={loginSignup.label}>Password</Text>
            <View style={[loginSignup.inputContainer, loginSignup.lastInput]}>
              <TextInput style={loginSignup.input} secureTextEntry={!passwordVisible} placeholder="••••••••" placeholderTextColor="#F739AB" />
              <TouchableOpacity onPress={() => setPasswordVisible(prev => !prev)}>
                {passwordVisible ? (
                    <EyeOnIcon width={24} height={24} />
                ) : (
                    <EyeOffIcon width={24} height={24} />
                )}
                </TouchableOpacity>
            </View>
          
            <TouchableOpacity style={loginSignup.RedLoginSignupButton}>
              <Text style={loginSignup.RedLoginSignupButtonText}>Log In</Text>
            </TouchableOpacity>
          
            <Text style={loginSignup.forgotPassword}>Forgot Password?</Text>
          
            <TouchableOpacity onPress={() => router.push("./signup/create-account")} style={loginSignup.PurpleLoginSignupButton}>
              <Text style={loginSignup.PurpleLoginSignupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          
            <Text style={loginSignup.orText}>or sign up with</Text>
            <View style={loginSignup.socialIcons}>
              <FacebookIcon width={32} height={32} />
              <GoogleIcon width={32} height={32} style={loginSignup.socialIconSpacing} />
            </View>
          
            <Text style={loginSignup.signUpLoginText}>Don’t have an account? <Text onPress={() => router.push("./signup/create-account")} style={loginSignup.signUpLoginLink}>Sign Up</Text></Text>
          </View>
        </View>
			</ScrollView>
    </>
  );
};