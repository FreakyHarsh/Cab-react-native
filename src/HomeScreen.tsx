import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import WheelLogo from './components/WheelLogo';
import globalStyles from './globalStyles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#FFF', padding: 15, borderRadius: 20, marginBottom: 100 }}>
        <WheelLogo />
      </View>
      <Button
        mode='contained'
        onPress={() => navigation.navigate('Driver')}
        style={globalStyles.btn}
      >
        <Text style={globalStyles.btnText}>Driver</Text>
      </Button>
      <Button
        mode='contained'
        onPress={() => navigation.navigate('Passenger')}
        style={globalStyles.btn}
      >
        <Text style={globalStyles.btnText}>Passenger</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD428',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
