import React from 'react';
import { View, Text } from 'react-native';
import { TourObj } from '../types/TourObj';
import { ScreenNavProps } from '../types/ScreenParamList';
import { Button, Headline, Paragraph } from 'react-native-paper';
import firebase from 'firebase';

function AcceptTour({ route, navigation }: ScreenNavProps<'AcceptTour'>) {
  const {
    expectedAmount,
    from,
    to,
    passengerName,
    passengerPhoneNumber,
    requiredSeats,
    id,
  }: TourObj = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFD428',
      }}
    >
      <View style={{ height: 40 }} />
      <Headline style={{ textAlign: 'center', fontWeight: '700', marginBottom: 15 }}>
        You accepted the trip from{' '}
        <Text style={{ color: '#808080' }}>{passengerName?.toUpperCase() ?? 'Passenger'}</Text>
      </Headline>
      <Text style={{ fontWeight: '700', marginBottom: 5 }}>
        TOUR: {from} ➡ {to}
      </Text>
      <Text>No of seats required: {requiredSeats}</Text>
      <Text>Contact no: {passengerPhoneNumber}</Text>
      <Text>Amount To Pay: {expectedAmount}</Text>
      <Button
        mode='contained'
        style={{ marginTop: 20 }}
        onPress={() => {
          firebase
            .firestore()
            .collection('tours')
            .doc(id)
            .delete()
            .then(() => {
              navigation.navigate('TourList');
            });
        }}
      >
        Finish Journey
      </Button>
    </View>
  );
}

export default AcceptTour;
