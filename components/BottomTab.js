// BottomTab.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route) => pathname === route;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push('/home')}
      >
        <Text style={[styles.label, isActive('/home') && styles.activeLabel]}>
          Home
        </Text>
        {isActive('/home') && <View style={styles.dot} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push('/map')}
      >
        <Ionicons name="location-outline" size={24} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push('/health')}
      >
        <Ionicons name="heart-outline" size={24} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push('/achievements')}
      >
        <Ionicons name="medal-outline" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E6FEE6',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: '#999',
  },
  activeLabel: {
    color: '#000',
    fontWeight: 'bold',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
    marginTop: 4,
  },
});

export default BottomTab;
