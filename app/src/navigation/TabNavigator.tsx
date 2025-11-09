// src/navigation/TabNavigator.tsx

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RootTabParamList } from '../types/navigation';

// Import your screen components
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SleepScreen from '../screens/SleepScreen';
import StepsScreen from '../screens/StepsScreen';
import WaterScreen from '../screens/WaterScreen';

// 1. Create the Tab object with our custom type
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Steps"
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6', // Tailwind blue-500
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide the header by default
      }}
    >
      <Tab.Screen
        name="Steps"
        component={StepsScreen}
        options={{
          title: 'Steps',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'walk' : 'walk-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Water"
        component={WaterScreen}
        options={{
          title: 'Water',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'water' : 'water-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
        options={{
          title: 'Sleep',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'bed' : 'bed-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'trophy' : 'trophy-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}