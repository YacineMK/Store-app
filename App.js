import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './layout/Navbar';
import Home from './components/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  }
});
