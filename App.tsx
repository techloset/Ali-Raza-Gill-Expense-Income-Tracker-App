import React, {useEffect} from 'react';
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
          <GestureHandlerRootView style={{flex: 1}}>
            <Navigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}
