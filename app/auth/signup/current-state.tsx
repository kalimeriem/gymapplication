import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import RedXIcon from "../../../assets/icons/red-x-icon.svg"

export default function CurrentState() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [gd, setGd] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  // Errors
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [goalWeightError, setGoalWeightError] = useState("");
  const [dateError, setDateError] = useState("");

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

  const validateFields = (): boolean => {
		let isValid = true;
	
		// Weight
		if (!weight.trim()) {
			setWeightError("Weight required");
			isValid = false;
		} else if (parseFloat(weight) <= 0 || isNaN(parseFloat(weight))) {
			setWeightError("Invalid weight");
			isValid = false;
		} else {
			setWeightError("");
		}
	
		// Height
		if (!height.trim()) {
			setHeightError("Height required");
			isValid = false;
		} else {
			const h = parseInt(height);
			if (isNaN(h) || h < 50 || h > 300) {
				setHeightError("Invalid height");
				isValid = false;
			} else {
				setHeightError("");
			}
		}
	
		// Goal Weight
		if (!goalWeight.trim()) {
			setGoalWeightError("Goal weight required");
			isValid = false;
		} else if (parseFloat(goalWeight) <= 0 || isNaN(parseFloat(goalWeight))) {
			setGoalWeightError("Invalid goal weight");
			isValid = false;
		} else {
			setGoalWeightError("");
		}
	
		// Date
		if (!gd) {
			setDateError("Target date required");
			isValid = false;
		} else {
			const today = new Date();
			const diff = (gd.getTime() - today.getTime()) / (1000 * 3600 * 24);
			if (diff < 7) {
				setDateError("Too soon to acheive your goal");
				isValid = false;
			} else {
				setDateError("");
			}
		}
	
		return isValid;
	};	

  const handleNext = () => {
    if (validateFields()) {
      router.push("./shape-level");
    }
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
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={loginSignup.container}>
          <StatusBar style="light" />
          <View style={loginSignup.title}>
            <Text style={[loginSignup.titleText, loginSignup.scrollTilteLong]}>
              Tell us about your current state
            </Text>
          </View>

          <View style={[loginSignup.card, loginSignup.SmallPagesCard]}>
            <View style={loginSignup.pageContent}>
              <Text style={loginSignup.label}>Weight</Text>
              <View style={[loginSignup.inputContainer, (!weightError) && loginSignup.spaceBetweenInput, weightError && loginSignup.inputErrorSignup, loginSignup.measureInputContainer]}>
                <TextInput
                  style={[loginSignup.input, loginSignup.measureInputText]}
                  placeholder="__.__"
                  placeholderTextColor="#F739AB"
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
              {weightError ? 
								<View style={loginSignup.errorContainer}>
            			<RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
			  					<Text style={loginSignup.errorLogin}>{weightError}</Text>
								</View>
							: null}

              <Text style={loginSignup.label}>Height</Text>
              <View style={[loginSignup.inputContainer, (!heightError) && loginSignup.spaceBetweenInput, heightError && loginSignup.inputErrorSignup, loginSignup.measureInputContainer]}>
                <TextInput
                  style={[loginSignup.input, loginSignup.measureInputText]}
                  placeholder="___"
                  placeholderTextColor="#F739AB"
                  keyboardType="numeric"
                  value={height}
                  onChangeText={(text) => setHeight(text.replace(/[^0-9]/g, ""))}
                  maxLength={3}
                />
                <Text style={loginSignup.unit}>cm</Text>
              </View>
              {heightError ?
							<View style={loginSignup.errorContainer}>
            		<RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
								<Text style={loginSignup.errorLogin}>{heightError}</Text>
							</View>
							: null}

              <Text style={loginSignup.label}>Goal Weight</Text>
              <View style={[loginSignup.inputContainer, (!goalWeightError) && loginSignup.spaceBetweenInput, goalWeightError && loginSignup.inputErrorSignup, loginSignup.measureInputContainer]}>
                <TextInput
                  style={[loginSignup.input, loginSignup.measureInputText]}
                  placeholder="__.__"
                  placeholderTextColor="#F739AB"
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
              { goalWeightError ?
							<View style={loginSignup.errorContainer}>
            		<RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
								<Text style={loginSignup.errorLogin}>{goalWeightError}</Text>
							</View>
							: null }

              <Text style={loginSignup.label}>When's your target date?</Text>
              <TouchableOpacity onPress={() => setShowPicker(true)} style={[loginSignup.inputContainer, (!dateError) && loginSignup.spaceBetweenInput, dateError && loginSignup.inputErrorSignup]}>
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
              { dateError ?
							<View style={loginSignup.errorContainer}>
								<RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
								<Text style={loginSignup.errorLogin}>{dateError}</Text>
							</View>
							: null }

              <Text style={loginSignup.notice}>
                Notice: Remember that bodies are different, so you should be gentle with yourself.
              </Text>
            </View>

            <View style={loginSignup.moveToPage}>
              <TouchableOpacity
                onPress={() => router.push("./create-account")}
                style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}
              >
                <Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNext}
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
}
