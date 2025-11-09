import TabNavigator from '@/app/src/navigation/TabNavigator';

/**
 * This is the root index route that expo-router will load by default.
 * It renders the TabNavigator which contains Home, Profile, and Settings screens.
 * The Home screen is set as the initialRouteName in TabNavigator.
 */
export default function Index() {
  return <TabNavigator />;
}

