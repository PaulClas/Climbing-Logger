import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import BottomNavBar from './app/components/Navigation/bottomNavigationBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <BottomNavBar/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  big: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});