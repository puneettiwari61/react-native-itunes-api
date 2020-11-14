/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Item} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Description" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
