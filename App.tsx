import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* <StatusBar /> */}
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
