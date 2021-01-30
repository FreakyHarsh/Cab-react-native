import React, { useEffect } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import DriverScreen from './src/Driver/DriverScreen';
import { StatusBar } from 'expo-status-bar';
import PassengerScreen from './src/Passenger/PassengerScreen';
import { ScreenParamList } from './src/types/ScreenParamList';
import BookingScreen from './src/Passenger/BookingScreen';
import BookingSuccess from './src/Passenger/BookingSuccess';
import { AppStateGlobal } from './src/store/store';
import firebase from 'firebase';
import ApiKeys from './src/ApiKeys';

// Added to remove multiple minutes warning
import { LogBox } from 'react-native';
import TourList from './src/Driver/TourList';
LogBox.ignoreLogs(['Setting a timer']);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    placeholder: 'white',
    text: 'white',
    primary: 'white',
    background: '#FFD428',
  },
};

const Stack = createStackNavigator<ScreenParamList>();

export default function App() {
  useEffect(() => {
    !firebase.apps.length && firebase.initializeApp(ApiKeys.FirebaseConfig);
  }, []);
  return (
    <PaperProvider theme={theme}>
      <AppStateGlobal>
        <NavigationContainer>
          <StatusBar style='light' />
          <Stack.Navigator
            screenOptions={{ headerTitleAlign: 'center', header: () => null }}
            initialRouteName='Home'
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Driver' component={DriverScreen} />
            <Stack.Screen name='Passenger' component={PassengerScreen} />
            <Stack.Screen name='Booking' component={BookingScreen} />
            <Stack.Screen name='BookingSuccess' component={BookingSuccess} />
            <Stack.Screen name='TourList' component={TourList} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStateGlobal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
