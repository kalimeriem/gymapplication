
// Navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/HomeScreen';
import WarmupScreen from '../app/screens/WarmupScreen';
import ProgressScreen from '../app/screens/ProgressScreen';
import AchievementsScreen from '../app/screens/AchievementsScreen';


// Create the stack navigator with proper TypeScript typing
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WarmupScreen"
          component={WarmupScreen}
          options={{ title: 'Warmup Exercises' }}
        />
        <Stack.Screen
          name="ProgressScreen"
          component={ProgressScreen}
          options={{ title: 'Your Progress' }}
        />
        <Stack.Screen
          name="AchievementsScreen"
          component={AchievementsScreen}
          options={{ title: 'Achievements' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type RootStackParamList = {
  Home: undefined;
  WarmupScreen: undefined;
  ProgressScreen: undefined;
  AchievementsScreen: undefined;
};