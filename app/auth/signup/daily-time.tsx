import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Pressable, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";

export default function DailyTime () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [hour1, setHour1] = useState('08');
  const [minute1, setMinute1] = useState('00');
  const [amPm1, setAmPm1] = useState('AM');

  const [hour2, setHour2] = useState('10');
  const [minute2, setMinute2] = useState('00');
  const [amPm2, setAmPm2] = useState('AM');

	const [isFocused1, setIsFocused1] = useState(false);
	const [isFocused2, setIsFocused2] = useState(false);
	const [isFocused3, setIsFocused3] = useState(false);
	const [isFocused4, setIsFocused4] = useState(false);

  const handleAmPmToggle1 = (value: 'AM' | 'PM') => {
    setAmPm1(value);
  };

	const handleAmPmToggle2 = (value: 'AM' | 'PM') => {
    setAmPm2(value);
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
								<Text style={[loginSignup.titleText, loginSignup.scrollTilteLong]}>How much time can you spare daily?</Text>
							</View>

							<View style={[loginSignup.card, loginSignup.SmallPagesCard, loginSignup.optionPage]}>
								<View style={loginSignup.pageContent}>
									<Text style={loginSignup.label}>From</Text>

									<View style={loginSignup.timeContainer}>
										<Text style={loginSignup.timeLabel}>Enter time</Text>

										<View style={loginSignup.timeRow}>
										<TextInput
											style={[loginSignup.timeInput, isFocused1 && loginSignup.timeInputFocused]}
											onFocus={() => setIsFocused1(true)}
											onBlur={() => {
												setIsFocused1(false);
												let h = parseInt(hour1, 10);
												if (isNaN(h) || h < 1 || h > 12) {
													setHour1('08');
												} else {
													setHour1(h.toString().padStart(2, '0'));
												}
											}}
											value={hour1}
											onChangeText={(text) => {
												if (/^\d{0,2}$/.test(text)) {
													setHour1(text);
												}
											}}
											keyboardType="numeric"
											maxLength={2}
										/>
											<Text style={loginSignup.colon}>:</Text>
											<TextInput
												style={[loginSignup.timeInput, loginSignup.minuteInput, isFocused2 && loginSignup.timeInputFocused]}
												onFocus={() => setIsFocused2(true)}
												onBlur={() => {
													setIsFocused2(false);
													let m = parseInt(minute1, 10);
													if (isNaN(m) || m < 0 || m > 59) {
														setMinute1('00');
													} else {
														setMinute1(m.toString().padStart(2, '0'));
													}
												}}
												value={minute1}
												onChangeText={(text) => {
													if (/^\d{0,2}$/.test(text)) {
														setMinute1(text);
													}
												}}												
												keyboardType="numeric"
												maxLength={2}
											/>
											<View style={loginSignup.amPmContainer}>
												<TouchableOpacity
													style={[loginSignup.amPmButton, amPm1 === 'AM' && loginSignup.selectedAmPm]}
													onPress={() => handleAmPmToggle1('AM')}
												>
													<Text style={loginSignup.amPmText}>AM</Text>
												</TouchableOpacity>
												<TouchableOpacity
													style={[loginSignup.amPmButton, amPm1 === 'PM' && loginSignup.selectedAmPm]}
													onPress={() => handleAmPmToggle1('PM')}
												>
													<Text style={loginSignup.amPmText}>PM</Text>
												</TouchableOpacity>
											</View>
										</View>

										<View style={loginSignup.bottomRow}>
											<Pressable
												onPress={() => {
													setHour1('08');
													setMinute1('00');
													setAmPm1('AM');
												}}
												style={({ pressed }) => [
													loginSignup.cancelButton,
													pressed && loginSignup.cancelSelectedButton,
												]}
											>
												<Text style={loginSignup.cancelButtonText}>Reset</Text>
											</Pressable>
										</View>
									</View>

									<Text style={loginSignup.label}>Until</Text>

									<View style={loginSignup.timeContainer}>
										<Text style={loginSignup.timeLabel}>Enter time</Text>

										<View style={loginSignup.timeRow}>
											<TextInput
												style={[loginSignup.timeInput, isFocused3 && loginSignup.timeInputFocused]}
												onFocus={() => setIsFocused3(true)}
												onBlur={() => {
													setIsFocused3(false);
													let h = parseInt(hour2, 10);
													if (isNaN(h) || h < 1 || h > 12) {
														setHour2('10');
													} else {
														setHour2(h.toString().padStart(2, '0'));
													}
												}}
												value={hour2}
												onChangeText={(text) => {
													if (/^\d{0,2}$/.test(text)) {
														setHour2(text);
													}
												}}											
												keyboardType="numeric"
												maxLength={2}
											/>
											<Text style={loginSignup.colon}>:</Text>
											<TextInput
												style={[loginSignup.timeInput, loginSignup.minuteInput, isFocused4 && loginSignup.timeInputFocused]}
												onFocus={() => setIsFocused4(true)}
												onBlur={() => {
													setIsFocused4(false);
													let m = parseInt(minute2, 10);
													if (isNaN(m) || m < 0 || m > 59) {
														setMinute2('00');
													} else {
														setMinute2(m.toString().padStart(2, '0'));
													}
												}}
												value={minute2}
												onChangeText={(text) => {
													if (/^\d{0,2}$/.test(text)) {
														setMinute2(text);
													}
												}}											
												keyboardType="numeric"
												maxLength={2}
											/>
											<View style={loginSignup.amPmContainer}>
												<TouchableOpacity
													style={[loginSignup.amPmButton, amPm2 === 'AM' && loginSignup.selectedAmPm]}
													onPress={() => handleAmPmToggle2('AM')}
												>
													<Text style={loginSignup.amPmText}>AM</Text>
												</TouchableOpacity>
												<TouchableOpacity
													style={[loginSignup.amPmButton, amPm2 === 'PM' && loginSignup.selectedAmPm]}
													onPress={() => handleAmPmToggle2('PM')}
												>
													<Text style={loginSignup.amPmText}>PM</Text>
												</TouchableOpacity>
											</View>
										</View>

										<View style={loginSignup.bottomRow}>
											<Pressable
												onPress={() => {
													setHour2('10');
													setMinute2('00');
													setAmPm2('AM');
												}}
												style={({ pressed }) => [
													loginSignup.cancelButton,
													pressed && loginSignup.cancelSelectedButton,
												]}
											>
												<Text style={loginSignup.cancelButtonText}>Reset</Text>
											</Pressable>

										</View>
									</View>

								</View>

								<View style={[loginSignup.moveToPage, loginSignup.optionPagePadding]}>
										<TouchableOpacity onPress={() => router.push("./shape-level")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
												<Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
										</TouchableOpacity>

										<TouchableOpacity onPress={() => router.push("./daily-activity")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
												<Text style={loginSignup.RedLoginSignupButtonText}>Next Step</Text>
										</TouchableOpacity>
								</View>

							</View>
						</View>
					</ScrollView>
    </>
  );
};