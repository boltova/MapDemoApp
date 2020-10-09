// @flow

import React, { createContext, useState, useEffect, useContext } from 'react';
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyAhhkJInvTyhXiPK3KtiieQYFgCp1B1oXk");

type Props = {
    children: React$Node;
};

type LatLng = {
    latitude: number;
    longitude: number;
};

type GeocoderContextValue = {
    address: string;
    setAddressCoordinate: (addressCoordinate: LatLng) => void;
};


const GeocoderContext = createContext<GeocoderContextValue>({
    address: '',
    setAddressCoordinate: () => { }
});


export const useGeocoder = (): GeocoderContextValue => useContext(GeocoderContext)

export const GeocoderProvider = ({ children }: Props): React$Node => {
    const [coordinate, setCoordinate] = useState(null);
    const [appAddress, setAppAddress] = useState('');

    useEffect(() => {
        if (coordinate) {
            getAddress();
        }
    }, [coordinate]);

    const setAddressCoordinate = (addressCoordinate: LatLng) => {
        setCoordinate(addressCoordinate);
    };

    const getAddress = () => {
        Geocoder.from(coordinate)
            .then(json => {
                setAppAddress(json.results[0].formatted_address);
            })
            .catch(error => console.warn(error));
    }


    return (
        <GeocoderContext.Provider
            value={{
                setAddressCoordinate,
                address: appAddress
            }}
        >
            {children}
        </GeocoderContext.Provider>
    );
};
