// src/screens/StepsScreen.tsx

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootTabScreenProps } from '../types/navigation';

export default function StepsScreen({ route, navigation }: RootTabScreenProps<'Steps'>) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <TouchableOpacity
          onPress={() => {
            // Navigate to profile or settings when available
            console.log('User icon pressed');
          }}
          style={styles.userIconContainer}
        >
          <Ionicons name="person-circle-outline" size={32} color="#3b82f6" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Steps</Text>
      <Text style={styles.subtitle}>Track your daily steps</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statValue}>12,343</Text>
        <Text style={styles.statLabel}>Steps Today</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  headerSpacer: {
    flex: 1,
  },
  userIconContainer: {
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
  statsContainer: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: 18,
    color: 'gray',
    marginTop: 8,
  },
});

