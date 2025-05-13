import { useState, useEffect } from 'react';

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
}

interface GeolocationError {
  code: number;
  message: string;
}

interface Address {
  latitude: number | null;
  longitude: number | null;
  address: string | null;
  error: GeolocationError | null;
  loading: boolean;
}

function useCurrentAddress(): Address {
  const [addressData, setAddressData] = useState<Address>({
    latitude: null,
    longitude: null,
    address: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddressData((prev) => ({
        ...prev,
        error: {
          code: 0,
          message: 'Geolocation is not supported by your browser.',
        },
        loading: false,
      }));
      return;
    }

    const successCallback = (position: GeolocationPosition) => {
      setAddressData((prev) => ({
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));

      // Reverse geocoding to get the address
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setAddressData((prev) => ({
            ...prev,
            address: data.display_name || 'Address not found',
            loading: false,
          }));
        })
        .catch((error: Error) => {
          setAddressData((prev) => ({
            ...prev,
            error: { code: -1, message: error.message },
            loading: false,
            address: 'Error fetching address',
          }));
        });
    };

    const errorCallback = (error: GeolocationError) => {
      setAddressData((prev) => ({
        ...prev,
        error,
        loading: false,
      }));
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    // Cleanup function (not really needed for getCurrentPosition, but good practice)
    return () => {};
  }, []);

  return addressData;
}

export default useCurrentAddress;