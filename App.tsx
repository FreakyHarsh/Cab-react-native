import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import DriverScreen from './src/Driver/DriverScreen';
import { StatusBar } from 'expo-status-bar';
import PassengerScreen from './src/Passenger/PassengerScreen';
import { ScreenParamList } from './src/types/ScreenParamList';

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
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{ headerTitleAlign: 'center', header: () => null }}
          initialRouteName='Home'
        >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Driver' component={DriverScreen} />
          <Stack.Screen name='Passenger' component={PassengerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
