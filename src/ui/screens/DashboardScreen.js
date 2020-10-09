// @flow

import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import MapView from 'react-native-maps';
import { useGeocoder } from '../../services';

const DashboardScreen = ():React$Node => {

  const { address, setAddressCoordinate } = useGeocoder();

  useEffect(() => {
    if (address) showAddressAlert();
  }, [address]);

  const showAddressAlert = () => Alert.alert(
    "Selected Address",
    address,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ],
    { cancelable: false }
  );

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 49.9949597,
        longitude: 36.2368552,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}

      onPress={event => setAddressCoordinate(event.nativeEvent.coordinate)}
    />
  );
};

export { DashboardScreen };
