// src/types/navigation.ts

// Define the parameter list for your Tab Navigator.
// The key is the screen name, and the value is the expected params.
// 'undefined' means the screen takes no navigation parameters.
export type RootTabParamList = {
  Steps: undefined;
  Water: undefined;
  Sleep: undefined;
  Leaderboard: undefined;
};

// This utility type ensures that the navigation prop passed to any screen
// inside the RootTabNavigator is correctly typed for that screen.
// You will use this in your individual screen components.
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, Screen>;