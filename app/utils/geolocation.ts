import Geolocation from '@react-native-community/geolocation';

// Configure Geolocation settings (optional)
export const configureGeolocation = () => {
  Geolocation.setRNConfiguration({
    skipPermissionRequests: false, // Change to true if you want to handle permission requests manually
    authorizationLevel: 'auto', // 'always', 'whenInUse', or 'auto'
    locationProvider: 'auto', // 'playServices', 'android', or 'auto'
  });
};

// Request location permission
const requestLocationPermission = () => {
  Geolocation.requestAuthorization(
    () => {
      console.log('Location permission granted');
      // You can call fetchUserLocation here or trigger any other logic
    },
    error => {
      console.log('Location permission denied:', error.message);
    },
  );
};

// Fetch user location
export const fetchUserLocation = (successCallback, errorCallback) => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      // console.log('Latitude:', latitude);
      // console.log('Longitude:', longitude);
      successCallback({latitude, longitude});
    },
    error => {
      console.error('Error fetching location:', error.message);
      errorCallback(error);
    },
  );
};

// Request permission and fetch location
export const fetchLocation = async () => {
  try {
    requestLocationPermission();
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};

// Call configureGeolocation (optional, called once during app setup)
// configureGeolocation();

// // Call fetchLocation when needed
// fetchLocation();
