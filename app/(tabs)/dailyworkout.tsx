import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import { useNavigation } from 'expo-router';

const DURATION = 150000; // 2.5 minutes in milliseconds

const exercises = [
  { id: '1', title: 'Exercise 1', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise1.png') },
  { id: '2', title: 'Exercise 2', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise2.png') },
  { id: '3', title: 'Exercise 3', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise3.png') },
  { id: '4', title: 'Exercise 4', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise4.png') },
  { id: '5', title: 'Exercise 5', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise5.png') },
  { id: '6', title: 'Exercise 6', duration: '02:30 Minutes', equipment: 'no equipment', difficulty: 'hard', image: require('../../assets/exercise6.png') },
];

export default function WeeklyWorkoutScreen() {
  const navigation = useNavigation();
  const [current, setCurrent] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const progressRefs = useRef<Animated.Value[]>(
    exercises.map(() => new Animated.Value(0))
  ).current;

  const startProgress = (index: number) => {
    if (completed.includes(index)) return;

    // Reset all bars
    progressRefs.forEach((bar, i) => {
      if (i !== index) {
        bar.setValue(0);
      }
    });

    setCurrent(index);

    Animated.timing(progressRefs[index], {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: false,
    }).start(() => {
      setCompleted(prev => [...prev, index]);
      setCurrent(null);
    });
  };

  const renderIcon = (index: number) => {
    if (completed.includes(index)) {
      return <Text style={styles.doneIcon}>✅</Text>;
    }
    if (current === index) {
      return <Text style={styles.pauseIcon}>⏳</Text>; // in progress
    }
    return <Text style={styles.playIcon}>▶️</Text>;
  };

  const renderItem = ({ item, index }: any) => {
    const width = progressRefs[index].interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    });

    return (
      <View style={styles.exerciseItem}>
        <Image source={item.image} style={styles.exerciseImage} />
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseTitle}>{item.title}</Text>
          <Text style={styles.exerciseMeta}>{item.duration} • {item.equipment} • {item.difficulty}</Text>
          {/* Progress Bar */}
          <View style={styles.progressBarBackground}>
            <Animated.View style={[styles.progressBar, { width }]} />
          </View>
        </View>
        <TouchableOpacity onPress={() => startProgress(index)}>
          {renderIcon(index)}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 🔙 See Weekly Plan */}
      <TouchableOpacity
      onPress={() => navigation.navigate('weekly' as never)}
      style={styles.backButton}
>
      <Text style={styles.backButtonText}>← See weekly plan</Text>
      </TouchableOpacity>


      <Text style={styles.title}>Today's plan</Text>
      <Text style={styles.subtitle}>
        Notice: Warm up properly before exercising to prevent injury and make your workouts more effective.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.blueBtn}>
          <Text style={styles.btnText}>10.00 mins</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.redBtn}>
          <Text style={styles.btnText}>10 mins Running</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  blueBtn: {
    backgroundColor: '#a1e3f5',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  redBtn: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseMeta: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  playIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  pauseIcon: {
    fontSize: 24,
    color: '#FFA500',
  },
  doneIcon: {
    fontSize: 24,
    color: 'green',
  },
});

