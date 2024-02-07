import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
// import Navigation from './src/navigation/Navigation';
import Login from './src/screens/auth/logIn/Login';
import SignUp from './src/screens/auth/signUp/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigation /> */}
      <Login />
      {/* <SignUp /> */}
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
