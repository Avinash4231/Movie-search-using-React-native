import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native-elements';


const App = () => {
  return (
    <>
      <View>
        <Text style={styles.title}>Movie Search</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    margin:10,
  },
});

export default App;
