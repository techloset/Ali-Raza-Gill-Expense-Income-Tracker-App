import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          {/* <StatusBar /> */}
          <GestureHandlerRootView style={{flex: 1}}>
            <Navigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
