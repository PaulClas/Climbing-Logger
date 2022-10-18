import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import BottomNavBar from './app/components/bottomNavigationBar';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.big}>B</Text>
      <Text>Beta</Text>
      <Text>Climbing Log and Training App</Text> */}
      <StatusBar style="auto" />
      <BottomNavBar/>
    </SafeAreaView>
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