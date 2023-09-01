import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native'; // Import Button and Linking
import Geolocation, {
  GeolocationResponse,
} from 'react-native-geolocation-service';
const HomeScreen = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null); // Specify the type

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const getLocation2 = () => {
      const result = requestLocationPermission();
      result.then(res => {
        console.log('res is:', res);
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
              setLocation(position);
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
              setLocation(false);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
      console.log(location);
    };
    getLocation2();
  }, []);

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  return (
    <View>
      <View
        style={{marginTop: 20, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Text style={{letterSpacing: 3}}>
          Latitude: {location ? location.coords.latitude : '??'}
        </Text>
        <Text style={{letterSpacing: 3, marginVertical: 10}}>
          Longitude: {location ? location.coords.longitude : '??'}
        </Text>
      </View>

      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
    </View>
  );
};

export default HomeScreen;
