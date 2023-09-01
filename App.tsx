import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Language Translator App</Text>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'firebrick',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});

export default App;
