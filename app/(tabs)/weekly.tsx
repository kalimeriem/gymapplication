import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeeklyPlanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Weekly Workout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});
