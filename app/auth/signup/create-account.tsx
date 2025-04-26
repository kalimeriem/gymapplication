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
import RedXIcon from "../../../assets/icons/red-x-icon.svg"
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

export default function CreateAccount () {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const phoneInput = React.useRef(null);

  const [dob, setDob] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

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

  const validateInputs = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", dob: "", password: "", confirmPassword: "", terms: "" };

    // Full name validation
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    } else {
      const nameParts = form.name.trim().split(/\s+/);
      if (nameParts.length < 2 || !nameParts.every(part => /^[A-Za-z]{2,}$/.test(part))) {
        newErrors.name = "Invalid full name";
        valid = false;
      }
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Invalid email address";
        valid = false;
      }
    }

    // Phone number validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else {
      const digitsOnly = form.phone.replace(/\D/g, "");
      if (digitsOnly.length < 8 || digitsOnly.length > 15) {
        newErrors.phone = "Invalid phone number";
        valid = false;
      }
    }

    // Date of Birth validation
    if (!dob) {
      newErrors.dob = "Date of birth required";
      valid = false;
    } else {
      const age = new Date().getFullYear() - dob.getFullYear();
      if (age < 13) {
        newErrors.dob = "You must be at least 13 years old";
        valid = false;
      }
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      const reasons = [];
      if (form.password.length < 8) reasons.push("at least 8 characters");
      if (!/[A-Z]/.test(form.password)) reasons.push("one uppercase letter");
      if (!/[a-z]/.test(form.password)) reasons.push("one lowercase letter");
      if (!/\d/.test(form.password)) reasons.push("a number");
      if (!/[\W_]/.test(form.password)) reasons.push("a symbol");
  
      if (reasons.length > 0) {
        newErrors.password = `Password must contain ${reasons.join(", ")}`;
        valid = false;
      }
    }
  
    // Confirm password validation
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Password confirmation required";
      valid = false;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
  
    // Terms agreement
    if (!isChecked) {
      newErrors.terms = "You must agree to the Terms & Privacy Policy";
      valid = false;
    }
  
    setErrors(newErrors);
    return valid;
  
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Proceed to the next screen if everything is valid
      router.push("./current-state");
    }
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
      <Stack.Screen options={{ headerShown: false }} />
      <View style={loginSignup.container}>
        <StatusBar style="light" />
        <View style={loginSignup.title}>
          <Text style={[loginSignup.titleText, loginSignup.scrollTitle]}>Create Account</Text>
        </View>

        <View style={[loginSignup.card, loginSignup.SmallPagesCard]}>
          <Text style={loginSignup.label}>Full Name</Text>
          <View style={[loginSignup.inputContainer, (!errors.name) && loginSignup.spaceBetweenInput, errors.name && loginSignup.inputErrorSignup]}>
            <TextInput
              style={loginSignup.input}
              placeholder="e.g. John Doe"
              placeholderTextColor="#F739AB"
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
          </View>
          {errors.name ? 
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.name}</Text>
          </View>
          : null}

          <Text style={loginSignup.label}>Email</Text>
          <View style={[loginSignup.inputContainer, (!errors.email) && loginSignup.spaceBetweenInput, errors.email && loginSignup.inputErrorSignup]}>
            <TextInput
              style={loginSignup.input}
              placeholder="e.g. example@gmail.com"
              placeholderTextColor="#F739AB"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
          </View>
          {errors.email ? 
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.email}</Text>
          </View>
          : null}

          <Text style={loginSignup.label}>Mobile Number</Text>
          <PhoneInput
            ref={phoneInput}
            containerStyle={[loginSignup.inputContainer, loginSignup.phoneSectionContainer, (!errors.phone) && loginSignup.spaceBetweenInput, errors.phone && loginSignup.inputErrorSignup]}
            textContainerStyle={loginSignup.numberContainer}
            textInputStyle={loginSignup.input}
            codeTextStyle={[loginSignup.input, loginSignup.countryCode]}
            defaultCode="DZ"
            placeholder="123456789"
            value={form.phone}
            onChangeText={(text) => setForm({ ...form, phone: text })}
            onChangeFormattedText={(formatted) => setForm({ ...form, phone: formatted })}
            textInputProps={{
              placeholderTextColor: '#F739AB'
            }}
          />
          {errors.phone ?
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.phone}</Text>
          </View>
          : null}

          <Text style={loginSignup.label}>Date Of Birth</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={[loginSignup.inputContainer, (!errors.dob) && loginSignup.spaceBetweenInput, errors.dob && loginSignup.inputErrorSignup]}>
            <Text style={[loginSignup.input, loginSignup.datePadding]}>
              {dob ? formatDate(dob) : "DD / MM / YYYY"}
            </Text>
          </TouchableOpacity>
          {errors.dob ? 
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.dob}</Text>
          </View>
          : null}
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
          <View style={[loginSignup.inputContainer, (!errors.password) && loginSignup.spaceBetweenInput, errors.password && loginSignup.inputErrorSignup]}>
            <TextInput
              style={loginSignup.input}
              secureTextEntry={!passwordVisible}
              placeholder="Must be 8+ characters"
              placeholderTextColor="#F739AB"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(prev => !prev)}>
              {passwordVisible ? (
                <EyeOnIcon width={24} height={24} />
              ) : (
                <EyeOffIcon width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
          {errors.password ?
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.password}</Text>
          </View>
          : null}

          <Text style={loginSignup.label}>Confirm Password</Text>
          <View style={[loginSignup.inputContainer, (!errors.confirmPassword) && loginSignup.spaceBetweenInput, errors.confirmPassword && loginSignup.inputErrorSignup]}>
            <TextInput
              style={loginSignup.input}
              secureTextEntry={!confirmPasswordVisible}
              placeholder="Repeat password"
              placeholderTextColor="#F739AB"
              value={form.confirmPassword}
              onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(prev => !prev)}>
              {confirmPasswordVisible ? (
                <EyeOnIcon width={24} height={24} />
              ) : (
                <EyeOffIcon width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
          {errors.confirmPassword ?
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.confirmPassword}</Text>
          </View>
          : null}

          <View style={loginSignup.agreeContainer}>
            <Text style={loginSignup.agreeText}>
              I agree to <Text style={loginSignup.agreeTextBold}>Terms of Use</Text> and <Text style={loginSignup.agreeTextBold}>Privacy Policy</Text>
            </Text>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              {isChecked ? <CheckedBox width={17} height={17} /> : <UncheckedBox width={17} height={17} />}
            </TouchableOpacity>
          </View>
          {errors.terms ?
          <View style={loginSignup.errorContainer}>
            <RedXIcon width={20} height={20} style={{ marginTop: 2, marginRight: 15 }} />
            <Text style={loginSignup.errorLogin}>{errors.terms}</Text>
            </View>
        : null}

          <TouchableOpacity onPress={handleSubmit} style={loginSignup.RedLoginSignupButton}>
            <Text style={loginSignup.RedLoginSignupButtonText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={loginSignup.signUpLoginText}>Already have an account? <Text onPress={() => router.push("../login")} style={loginSignup.signUpLoginLink}>Log In</Text></Text>

        </View>
      </View>
    </ScrollView>
  );
}
