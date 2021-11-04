import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from './assets/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Laske palkka</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BackgroundBeige,
  },
  wrapper: {
    
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textColor,
//    backgroundColor: "beige",
    paddingTop: "10%",
    
  }
});
