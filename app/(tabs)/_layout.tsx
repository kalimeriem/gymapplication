import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> 
        }} 
      />
      
      {/* WorkoutPlan Tab */}
      <Tabs.Screen 
        name="dailyworkout" 
        options={{ 
          title: "dailyworkout", 
          tabBarIcon: ({ color }) => <Ionicons name="barbell" size={24} color={color} /> 
        }} 
      />
    </Tabs>
  );
}


