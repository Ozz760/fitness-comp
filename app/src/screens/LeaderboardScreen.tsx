// src/screens/LeaderboardScreen.tsx

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootTabScreenProps } from '../types/navigation';

// Dummy leaderboard data
const leaderboardData = {
  steps: [
    { name: 'Alex Johnson', steps: 12450, rank: 1 },
    { name: 'Sarah Chen', steps: 11800, rank: 2 },
    { name: 'Mike Davis', steps: 10200, rank: 3 },
  ],
  water: [
    { name: 'Sarah Chen', glasses: 10, rank: 1 },
    { name: 'Alex Johnson', glasses: 8, rank: 2 },
    { name: 'Mike Davis', glasses: 7, rank: 3 },
  ],
  sleep: [
    { name: 'Mike Davis', hours: 8.5, rank: 1 },
    { name: 'Alex Johnson', hours: 7.8, rank: 2 },
    { name: 'Sarah Chen', hours: 7.2, rank: 3 },
  ],
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return '🏆';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return `${rank}.`;
  }
};

const LeaderboardSection = ({ title, icon, data, unit }: { title: string; icon: string; data: any[]; unit: string }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionIcon}>{icon}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    {data.map((person, index) => (
      <View 
        key={`${title}-${person.rank}`} 
        style={[
          styles.leaderboardItem,
          index === data.length - 1 && styles.lastItem
        ]}
      >
        <View style={styles.rankContainer}>
          <Text style={styles.rankIcon}>{getRankIcon(person.rank)}</Text>
        </View>
        <View style={styles.personInfo}>
          <Text style={styles.personName}>{person.name}</Text>
          <Text style={styles.personStats}>
            {person.steps && `${person.steps.toLocaleString()} steps`}
            {person.glasses && `${person.glasses} glasses`}
            {person.hours && `${person.hours}h`}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

export default function LeaderboardScreen({ route, navigation }: RootTabScreenProps<'Leaderboard'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.subtitle}>Top performers this week</Text>
        </View>
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

      <LeaderboardSection
        title="Most Steps"
        icon="👟"
        data={leaderboardData.steps}
        unit="steps"
      />

      <LeaderboardSection
        title="Most Water Intake"
        icon="💧"
        data={leaderboardData.water}
        unit="glasses"
      />

      <LeaderboardSection
        title="Most Sleep"
        icon="😴"
        data={leaderboardData.sleep}
        unit="hours"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
  },
  userIconContainer: {
    padding: 8,
    marginTop: -8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  rankContainer: {
    width: 40,
    alignItems: 'center',
  },
  rankIcon: {
    fontSize: 24,
  },
  personInfo: {
    flex: 1,
    marginLeft: 12,
  },
  personName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  personStats: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '500',
  },
});

