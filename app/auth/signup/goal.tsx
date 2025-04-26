import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";
import ArrowRightIcon from "../../../assets/icons/arrow-right.svg"
import RedXIcon from "../../../assets/icons/red-x-icon.svg"

export default function Goal () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

	const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const optionTitles = ['Loosing weigth', 'Improving endurence', 'Building muscles'];
	const optionDesc = [
		'I want to focus on burning calories for now!',
		'Improving your ability of resistence for long periods',
		'On a mission to build your dream body'];

	const [error, setError] = useState("");

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "LeagueSpartan-Light": require("../../../assets/fonts/LeagueSpartan-Light.ttf"),
        "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
				"Poppins-Light": require("../../../assets/fonts/Poppins-Light.ttf"),
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
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={loginSignup.container}>
                    <StatusBar style="light" />
          <View style={loginSignup.title}>
            <Text style={[loginSignup.titleText, loginSignup.scrollTitle]}>What is your goal?</Text>
          </View>

          <View style={[loginSignup.card, loginSignup.SmallPagesCard, loginSignup.optionPage]}>
						<View style={loginSignup.pageContent}>
							{optionTitles.map((optionTitle, index) => (
								<TouchableOpacity
									key={index}
									style={[
										loginSignup.optionButton,
										error && loginSignup.errorOption,
										selectedOption === index && loginSignup.selectedOption,
										index === optionTitles.length - 1 && error && loginSignup.optionError,
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

							{error ? (
								<View style={loginSignup.errorContainerSmall}>
									<RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
									<Text style={loginSignup.errorLogin}>{error}</Text>
								</View>
							) : null}

							<Text style={[loginSignup.notice, loginSignup.optionPageMargin]}>Notice: Your goals should be realistic, please make your searches before picking-up a goal.</Text>
							
							<View style={loginSignup.helpContainer}>
								<Text style={loginSignup.helpText}>Help?</Text>
								<ArrowRightIcon width={17} height={17} style={loginSignup.arrowRight}/>
							</View>

						</View>

						<View style={[loginSignup.moveToPage, loginSignup.optionPagePadding, error && loginSignup.moveToPageError]}>
							<TouchableOpacity onPress={() => router.push("./equipement")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
								<Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => {
									if (selectedOption === null) {
										setError("Please select an option");
									} else {
										setError("");
										router.push("./goal");
									}
								}}
								style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}
							>
								<Text style={loginSignup.RedLoginSignupButtonText}>Next Step</Text>
							</TouchableOpacity>
						</View>

          </View>
        </View>
			</ScrollView>
    </>
  );
};