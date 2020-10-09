// @flow

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './DashboardStack';

const AppNavigation = ():React$Node => (
    <NavigationContainer>
        <DashboardStack />
    </NavigationContainer>
);


export { AppNavigation };
