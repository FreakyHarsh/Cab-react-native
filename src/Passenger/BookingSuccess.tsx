import React from 'react';
import { View, Text } from 'react-native';
import { Headline } from 'react-native-paper';

function BookingSuccess() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD428',
      }}
    >
      <Headline style={{ color: '#000', textAlign: 'center' }}>
        Booking Successful wait for driver to contact you.
      </Headline>
    </View>
  );
}

export default BookingSuccess;
