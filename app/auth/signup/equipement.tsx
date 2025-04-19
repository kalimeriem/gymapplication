import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image, Modal } from "react-native";
import * as Font from "expo-font";
import { router, Stack } from "expo-router";
import loginSignup from "../../styles/loginSignup";
import { StatusBar } from "expo-status-bar";
import ArrowBottomIcon from "../../../assets/icons/arrow-bottom.svg"

const equipmentList = [
  // Strength Training
  "Dumbbells",
  "Barbells",
  "Kettlebells",
  "Resistance Bands",
  "Weight Bench",
  "Power Rack",
  "Smith Machine",
  "Cable Machine",
  "Pull-up Bar",
  "Dip Station",
  "Sandbags",
  "Medicine Ball",
  "Weight Plates",
  "EZ Curl Bar",
  "Trap Bar",
  "Adjustable Dumbbells",
  "Squat Rack",
  "Leg Press Machine",
  "Lat Pulldown Machine",
  "Pec Deck Machine",
  "Chest Press Machine",
  "Hack Squat Machine",
  "Leg Curl/Extension Machine",

  // Cardio
  "Treadmill",
  "Elliptical Trainer",
  "Stationary Bike",
  "Rowing Machine",
  "Stair Climber",
  "Air Bike (Assault Bike)",
  "Jump Rope",
  "Mini Stepper",
  "Spin Bike",
  "Vertical Climber",

  // Flexibility & Mobility
  "Yoga Mat",
  "Foam Roller",
  "Stretching Strap",
  "Massage Ball",
  "Balance Ball (Stability Ball)",
  "Bosu Ball",
  "Pilates Ring",
  "Resistance Loops",
  "Yoga Blocks",
  "Inversion Table",

  // Bodyweight & Functional
  "TRX Suspension Trainer",
  "Gymnastics Rings",
  "Parallettes",
  "Ab Wheel",
  "Push-up Bars",
  "Core Sliders",
  "Plyo Box",
  "Battle Ropes",
  "Agility Ladder",
  "Cones",
  "Weighted Vest",

  // Home Workout Extras
  "Ankle Weights",
  "Wrist Weights",
  "Door Anchor (for bands)",
  "Step Platform",
  "Mini Resistance Bands",
  "Portable Pull-up Bar",
  "Wall Ball",
  "Speed Rope",
  "Gliding Discs"
];

export default function CurrentState () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

	const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
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
      <Stack.Screen options={{headerShown: false}} />
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<View style={loginSignup.container}>
						<StatusBar style="light" />
						<View style={loginSignup.title}>
							<Text style={[loginSignup.titleText, loginSignup.scrollTilteLong]}>What equipment can you use?</Text>
						</View>

						<View style={[loginSignup.card, loginSignup.SmallPagesCard]}>
							<View style={loginSignup.pageContent}>
								<Image
									source={require('../../../assets/images/equipement.png')}
									style={loginSignup.equipementImage}
								/>

								<TouchableOpacity
									style={loginSignup.selectButton}
									onPress={() => setModalVisible(true)}
								>
									<Text style={loginSignup.selectButtonText}>
										{selectedItems.length > 0 ? `${selectedItems.length} selected` : 'Select Equipment'}
									</Text>
									<ArrowBottomIcon width={17} height={17} style={loginSignup.arrowBottom}/>
								</TouchableOpacity>

								<Modal
									visible={modalVisible}
									transparent
									animationType="slide"
								>
									<View style={loginSignup.modalOverlay}>
										<View style={loginSignup.modalContent}>
											<Text style={loginSignup.modalTitle}>Select Equipment</Text>

											<ScrollView style={loginSignup.modalList}>
												{equipmentList.map((item, index) => (
													<TouchableOpacity
														key={index}
														style={[
															loginSignup.modalItem,
															selectedItems.includes(item) && loginSignup.selectedModalItem
														]}
														onPress={() => toggleSelection(item)}
													>
														<Text style={loginSignup.modalItemText}>{item}</Text>
													</TouchableOpacity>
												))}
											</ScrollView>

											<TouchableOpacity
												style={loginSignup.modalDoneButton}
												onPress={() => setModalVisible(false)}
											>
												<Text style={loginSignup.modalDoneButtonText}>Done</Text>
											</TouchableOpacity>
										</View>
									</View>
								</Modal>
							</View>

							<View style={loginSignup.moveToPage}>
								<TouchableOpacity onPress={() => router.push("./daily-activity")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
									<Text style={loginSignup.RedLoginSignupButtonText}>Go Back</Text>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => router.push("./goal")} style={[loginSignup.RedLoginSignupButton, loginSignup.moveToPageButton]}>
									<Text style={loginSignup.RedLoginSignupButtonText}>Next Step</Text>
								</TouchableOpacity>
							</View>

						</View>
					</View>
				</ScrollView>
    </>
  );
};