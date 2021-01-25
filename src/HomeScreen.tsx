import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import WheelLogo from './components/WheelLogo';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#FFF', padding: 15, borderRadius: 20, marginBottom: 100 }}>
        <WheelLogo />
      </View>
      <Button mode='contained' onPress={() => navigation.navigate('Driver')} style={styles.btn}>
        <Text style={styles.btnText}>Driver</Text>
      </Button>
      <Button mode='contained' onPress={() => navigation.navigate('Driver')} style={styles.btn}>
        <Text style={styles.btnText}>Passenger</Text>
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
  btnText: {
    color: '#FFD428',
    fontSize: 20,
  },
  btn: {
    width: '80%',
    marginBottom: 20,
    padding: 5,
    borderRadius: 15,
  },
});

export default HomeScreen;
