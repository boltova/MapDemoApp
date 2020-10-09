// @flow

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../screens';

const Stack = createStackNavigator();

export const DashboardStack = ():React$Node => (
  <Stack.Navigator
    screenOptions={{
      header: () => null
    }}
  >

    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
    />

  </Stack.Navigator>
);
