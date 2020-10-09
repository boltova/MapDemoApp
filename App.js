// @flow

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { AppNavigation } from './src/ui/navigations';
import { GeocoderProvider } from './src/services';

const App: () => React$Node = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <GeocoderProvider>
        <AppNavigation />
      </GeocoderProvider>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;
