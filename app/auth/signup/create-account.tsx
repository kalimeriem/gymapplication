import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import PhoneInput from 'react-native-phone-number-input';
import EyeOnIcon from "../../../assets/icons/eye-on.svg"
import EyeOffIcon from "../../../assets/icons/eye-off.svg"
import CheckedBox from '../../../assets/icons/checked.svg';
import UncheckedBox from '../../../assets/icons/unchecked.svg';
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

export default function CreateAccount () {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = React.useRef(null);

  const [dob, setDob] = useState<Date | null>(null);
	const [showPicker, setShowPicker] = useState(false);

	const [isChecked, setIsChecked] = useState(false);

	const onChange = (event: any, selectedDate?: Date) => {
		setShowPicker(Platform.OS === 'ios');
		if (selectedDate) {
			setDob(selectedDate);
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
        "LeagueSpartan-Regular": require("../../../assets/fonts/LeagueSpartan-Regular.ttf"),
        "LeagueSpartan-SemiBold": require("../../../assets/fonts/LeagueSpartan-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen options={{headerShown: false}} />
      <View style={loginSignup.container}>
        <StatusBar style="light" />
        <View style={loginSignup.title}>
          <Text style={[loginSignup.titleText, loginSignup.scrollTitle]}>Create Account</Text>
        </View>

        <View style={[loginSignup.card, loginSignup.SmallPagesCard]}>
          <Text style={loginSignup.label}>Full Name</Text>
          <View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
            <TextInput 
              style={loginSignup.input}
              placeholder="John Doe"
              placeholderTextColor="#F739AB"
            />
          </View>

          <Text style={loginSignup.label}>Email</Text>
          <View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
            <TextInput
              style={loginSignup.input}
              placeholder="example@example.com"
              placeholderTextColor="#F739AB"
            />
          </View>

          <Text style={loginSignup.label}>Mobile Number</Text>
          <PhoneInput
            ref={phoneInput}
            containerStyle={[loginSignup.inputContainer, loginSignup.phoneSectionContainer, loginSignup.spaceBetweenInput]} 
            textContainerStyle={loginSignup.numberContainer}
            textInputStyle={loginSignup.input}
            codeTextStyle={[loginSignup.input, loginSignup.countryCode]}
            defaultCode="DZ"
            placeholder="123456789"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            onChangeFormattedText={(formatted) => setPhoneNumber(formatted)}
          />

          <Text style={loginSignup.label}>Date Of Birth</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
						<Text style={[loginSignup.input, loginSignup.datePadding]}>
							{dob ? formatDate(dob) : "DD / MM / YYYY"}
						</Text>
					</TouchableOpacity>

					{showPicker && (
						<DateTimePicker
							value={dob || new Date(2000, 0, 1)}
							mode="date"
							display="spinner"
							onChange={onChange}
							maximumDate={new Date()}
						/>
					)}
        
          <Text style={loginSignup.label}>Password</Text>
          <View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
            <TextInput style={loginSignup.input} secureTextEntry={!passwordVisible} placeholder="••••••••" placeholderTextColor="#F739AB" />
            <TouchableOpacity onPress={() => setPasswordVisible(prev => !prev)}>
                {passwordVisible ? (
                    <EyeOnIcon width={24} height={24} />
                ) : (
                    <EyeOffIcon width={24} height={24} />
                )}
                </TouchableOpacity>
          </View>

          <Text style={loginSignup.label}>Confirm Password</Text>
          <View style={[loginSignup.inputContainer, loginSignup.spaceBetweenInput]}>
            <TextInput style={loginSignup.input} secureTextEntry={!confirmPasswordVisible} placeholder="••••••••" placeholderTextColor="#F739AB" />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(confirmPrev => !confirmPrev)}>
                {confirmPasswordVisible ? (
                    <EyeOnIcon width={24} height={24} />
                ) : (
                    <EyeOffIcon width={24} height={24} />
                )}
                </TouchableOpacity>
          </View>
          
					<View style={loginSignup.agreeContainer}>
						<Text style={loginSignup.agreeText}>
							I agree to <Text style={loginSignup.agreeTextBold}>Terms of Use</Text> and <Text style={loginSignup.agreeTextBold}>Privacy Policy</Text>
						</Text>
						<TouchableOpacity onPress={() => setIsChecked(!isChecked)} >
							{isChecked ? <CheckedBox width={17} height={17} /> : <UncheckedBox width={17} height={17} />}
						</TouchableOpacity>
					</View>
        
          <TouchableOpacity onPress={() => router.push("./current-state")} style={loginSignup.RedLoginSignupButton}>
            <Text style={loginSignup.RedLoginSignupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        
          <Text style={loginSignup.signUpLoginText}>Already have an account? <Text onPress={() => router.push("../login")} style={loginSignup.signUpLoginLink}>Log In</Text></Text>
        </View>
      </View>
    </ScrollView>
  );
};
