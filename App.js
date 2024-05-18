import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './layout/Navbar';
import Home from './components/home';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Bottombar from './layout/Bottombar';

export default function Main() {
  return (
    <PaperProvider>
      <Navbar />
      <Home />
      <Bottombar />
    </PaperProvider>
  );
}


