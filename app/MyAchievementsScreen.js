import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomTab from '../components/BottomTab';

const AchievementCard = ({ iconName, label, time, hours, km, bg = '#FFF9CC' }) => (
  <View style={[styles.card, { backgroundColor: bg }]}>
    <View style={styles.activityRow}>
      <FontAwesome5 name={iconName} size={20} color="#808080" style={styles.activityIcon} />
      <Text style={styles.activityText}>{label} • {time}</Text>
    </View>
    <View style={styles.cardRow}>
      <Text style={styles.cardValue}>{hours}</Text>
      <Text style={styles.unit}>hours</Text>
      <Text style={styles.cardValue}>{km}</Text>
      <Text style={styles.unit}>kilometers</Text>
    </View>
  </View>
);

const MyAchievementsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.title}>My Achievements</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.sectionTitle}>today</Text>
        <AchievementCard iconName="bicycle" label="Cycling" time="8.00 AM - 9.30AM" hours="1.32" km="9.50" />
        <AchievementCard iconName="running" label="Running" time="8.00 AM - 9.30AM" hours="1.32" km="9.50" />
        
        <View style={styles.weightCard}>
          <Text style={styles.weightText}>-0,5 kg</Text>
        </View>

        <Text style={styles.sectionTitle}>This week</Text>
        <AchievementCard iconName="bicycle" label="Cycling" time="8.00 AM - 9.30AM" hours="1.32" km="9.50" />

        <Text style={styles.sectionTitle}>Earlier</Text>
      </ScrollView>

      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEFFC',
  },
  header: {
    backgroundColor: '#6EF260',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backArrow: {
    position: 'absolute',
    left: 20,
    top: 30,
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  body: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityIcon: {
    marginRight: 8,
  },
  activityText: {
    color: '#808080',
    fontWeight: '600',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 6,
  },
  unit: {
    marginRight: 12,
    fontSize: 14,
    color: '#333',
  },
  weightCard: {
    backgroundColor: '#F1FF9C',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  weightText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MyAchievementsScreen;

