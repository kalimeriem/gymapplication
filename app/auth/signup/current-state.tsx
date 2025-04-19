import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

export default function CurrentState () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [goalWeight, setGoalWeight] = useState("");

  const [gd, setGd] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

	const onChange = (event: any, selectedDate?: Date) => {
			setShowPicker(Platform.OS === 'ios');
			if (selectedDate) {
				setGd(selectedDate);
			}
		};	
	
		const formatDate = (date: Date): string => {
			const day = String(date.getDate()).padStart(2, '0');
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const year = date.getFullYear();
			return `${day} / ${month} / ${year}`;
		};

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
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<View style={loginSignup.container}>
											<StatusBar style="light" />
						<View style={loginSignup.title}>
							<Text style={[loginSignup.titleText, loginSignup.scrollTilteLong]}>Tell us about your current state</Text>
						</View>

						<View style={[loginSignup.card, loginSignup.SmallPagesCard]}>
							<View style={loginSignup.pageContent}>
								<Text style={loginSignup.label}>Weight</Text>
								<View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput, loginSignup.measureInputContainer]}>
									<TextInput style={[loginSignup.input, loginSignup.measureInputText]} placeholder="__.__" placeholderTextColor="#F739AB"
										keyboardType="decimal-pad"
										value={weight}
										onChangeText={(text) => {
											const formatted = text.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
											setWeight(formatted);
										}}
										maxLength={6}
									/>
									<Text style={loginSignup.unit}>kg</Text>
								</View>

								<Text style={loginSignup.label}>Height</Text>
								<View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput, loginSignup.measureInputContainer]}>
									<TextInput style={[loginSignup.input, loginSignup.measureInputText]} placeholder="___" placeholderTextColor="#F739AB"
										keyboardType="numeric"
										value={height}
										onChangeText={(text) => setHeight(text.replace(/[^0-9]/g, ""))}
										maxLength={3}
									/>
									<Text style={loginSignup.unit}>cm</Text>
								</View>

								<Text style={loginSignup.label}>Goal Weight</Text>
								<View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput, loginSignup.measureInputContainer]}>
									<TextInput style={[loginSignup.input, loginSignup.measureInputText]} placeholder="__.__" placeholderTextColor="#F739AB"
										keyboardType="decimal-pad"
										value={goalWeight}
										onChangeText={(text) => {
											const formatted = text.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
											setGoalWeight(formatted);
										}}
										maxLength={6}
									/>
									<Text style={loginSignup.unit}>kg</Text>
								</View>

								<Text style={loginSignup.label}>When's your target date?</Text>
								<TouchableOpacity onPress={() => setShowPicker(true)} style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
									<Text style={[loginSignup.input, loginSignup.datePadding]}>
										{gd ? formatDate(gd) : "DD / MM / YYYY"}
									</Text>
								</TouchableOpacity>

								{showPicker && (
									<DateTimePicker
										value={gd || new Date()}
										mode="date"
										display="spinner"
										onChange={onChange}
									/>
								)}

								<Text style={loginSignup.notice}>Notice: Remember that bodies are different, so you should be gentle with yourself.</Text>
							</View>

							<View style={loginSignup.moveToPage}>
								<TouchableOpacity onPress={() => router.push("./create-account")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
									<Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => router.push("./shape-level")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
									<Text style={loginSignup.RedLoginSignupButtonText}>Next Step</Text>
								</TouchableOpacity>
							</View>

						</View>
					</View>
				</ScrollView>
    </>
  );
};