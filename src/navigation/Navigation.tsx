import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './stackNavigation/StackNavigation';

const Navigationscreen = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigationscreen;
