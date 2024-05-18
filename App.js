
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/home';
import { PaperProvider } from 'react-native-paper';
import Login from './components/auth/login';

export default function Main() {
  return (
    <PaperProvider>
      {/* <Home /> */}
      <Login />
    </PaperProvider>
  );
}




