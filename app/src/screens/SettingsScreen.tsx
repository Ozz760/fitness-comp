// src/screens/SettingsScreen.tsx

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootTabScreenProps } from '../types/navigation';

// The component is strongly typed using the utility type from Step 2
export default function SettingsScreen({ route, navigation }: RootTabScreenProps<'Settings'>) {
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
      <Text style={styles.title}>Settings Screen</Text>
      <Text>Configure your app settings here</Text>
      {/* Example of a type-safe navigation call: */}
      <Text onPress={() => navigation.navigate('Home')}>Go to Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 24,
    marginBottom: 10,
  },
});