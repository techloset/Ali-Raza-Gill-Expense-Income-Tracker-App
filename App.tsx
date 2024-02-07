import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Navigation from './src/navigation/Navigation';
import SignUp from './src/screens/auth/signUp/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigation /> */}
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
