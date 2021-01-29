import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, TextInput, IconButton, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../globalStyles';
import { ScreenNavProps } from '../types/ScreenParamList';

function BookingScreen({ navigation }: ScreenNavProps<'BookingSuccess'>) {
  const [pickLocation, setPickLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [noOfSeats, setNoOfSeats] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  return (
    <View
      style={{
        backgroundColor: '#FFD428',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
      }}
    >
      <Card
        style={{
          borderRadius: 10,
          height: '80%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <ScrollView> */}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#FFD428',
            fontWeight: '700',
          }}
        >
          Hello Harsh
        </Text>
        <Text style={{ fontSize: 20, color: '#86847B', textAlign: 'center', marginBottom: 30 }}>
          Let's book a ride
        </Text>

        <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: '10%' }}>
          <TextInput
            label='Pick up Location'
            onChangeText={(text) => setPickLocation(text)}
            style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          />
          <IconButton
            icon='car-pickup'
            size={30}
            style={{ position: 'absolute', right: 0, top: 5 }}
          ></IconButton>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: '10%',
            borderBottomColor: 'red',
          }}
        >
          <TextInput
            label='Drop off Location'
            onChangeText={(text) => setDropLocation(text)}
            underlineColor='transparent'
            style={{ flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          />
          <IconButton
            icon='map-marker'
            size={30}
            style={{ position: 'absolute', right: 0, top: 5 }}
          ></IconButton>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#FFD428',
              padding: 5,
              width: '35%',
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: '#FFF', position: 'relative', top: 6, left: 5 }}>
              No of seats
            </Text>
            <Picker
              selectedValue={noOfSeats}
              style={{ width: '100%', color: '#FFF' }}
              onValueChange={(itemValue) => setNoOfSeats(itemValue as string)}
            >
              <Picker.Item label='4' value='4' />
              <Picker.Item label='6' value='6' />
              <Picker.Item label='8' value='8' />
              <Picker.Item label='10' value='10' />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: '#FFD428',
              padding: 5,
              width: '50%',
              borderRadius: 10,
              paddingBottom: 10,
            }}
          >
            <TextInput
              label='Expected Amount'
              value={expectedAmount}
              onChangeText={(text) => {
                setExpectedAmount(text);
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Button
            mode='contained'
            onPress={() => navigation.navigate('BookingSuccess')}
            style={{
              width: '80%',
              backgroundColor: '#FFD428',
              marginTop: 25,
              padding: 5,
              borderRadius: 15,
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 20 }}>Book your ride</Text>
          </Button>
        </View>
        {/* </ScrollView> */}
      </Card>
    </View>
  );
}

export default BookingScreen;
