import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";

export default function ShapeLevel () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

	const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const optionTitles = ['Beginner', 'Intermediate', 'Advanced'];
	const optionDesc = ['I’m new to working out', 'I move every now and then', 'I practice sport regulary'];

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "LeagueSpartan-Light": require("../../../assets/fonts/LeagueSpartan-Light.ttf"),
        "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
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
        <View style={loginSignup.container}>
                    <StatusBar style="light" />
          <View style={loginSignup.title}>
            <Text style={loginSignup.titleText}>What’s your shape level?</Text>
          </View>

          <View style={[loginSignup.card, loginSignup.SmallPagesCard, loginSignup.optionPage]}>
						<View style={loginSignup.pageContent}>
							{optionTitles.map((optionTitle, index) => (
								<TouchableOpacity
									key={index}
									style={[
										loginSignup.optionButton,
										selectedOption === index && loginSignup.selectedOption,
									]}
									onPress={() => setSelectedOption(index)}
								>
									<Text
										style={[
											loginSignup.optionTitle,
											selectedOption === index && loginSignup.selectedTitle,
										]}
									>
										{optionTitle}
									</Text>
									<Text
										style={[
											loginSignup.optionDesc,
											selectedOption === index && loginSignup.selectedDesc,
										]}
									>
										{optionDesc[index]}
									</Text>
								</TouchableOpacity>
							))}

						</View>

						<View style={[loginSignup.moveToPage, loginSignup.optionPagePadding]}>
							<TouchableOpacity onPress={() => router.push("./current-state")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
								<Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => router.push("./daily-time")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
								<Text style={loginSignup.RedLoginSignupButtonText}>Next Step</Text>
							</TouchableOpacity>
						</View>

          </View>
        </View>
    </>
  );
};