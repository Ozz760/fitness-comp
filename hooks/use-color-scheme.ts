import { Platform, useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Custom hook that disables dark mode on iOS
 * Always returns 'light' on iOS, otherwise uses system color scheme
 */
export function useColorScheme() {
  const systemColorScheme = useRNColorScheme();
  
  // Force light mode on iOS
  if (Platform.OS === 'ios') {
    return 'light';
  }
  
  return systemColorScheme ?? 'light';
}
