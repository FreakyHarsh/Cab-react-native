import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import globalStyles from '../globalStyles';

function SignUp({ isDriver }: { isDriver?: boolean }) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePwd, setHidePwd] = useState(true);
  const [carNumber, setCarNumber] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFD428',
        height: '100%',
        padding: 30,
      }}
    >
      <TextInput
        label='Full Name'
        mode='outlined'
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label='Email'
        mode='outlined'
        onChangeText={(text) => setFullName(text)}
        style={{ marginBottom: 20 }}
      />
      <View>
        <TextInput
          label='Password'
          mode='outlined'
          onChangeText={(text) => setPassword(text)}
          theme={{
            colors: {
              placeholder: 'white',
              text: 'white',
              primary: 'white',
              background: '#FFD428',
            },
          }}
          secureTextEntry={hidePwd}
          style={{ marginBottom: 20, flex: 1 }}
        />
        <IconButton
          icon={hidePwd ? 'eye-off' : 'eye'}
          size={29}
          onPress={() => setHidePwd(!hidePwd)}
          theme={{
            colors: {
              placeholder: 'white',
              text: 'white',
              primary: 'white',
              background: '#FFD428',
            },
          }}
          style={{ position: 'absolute', zIndex: 1, right: 0, top: 7 }}
        />
      </View>
      <TextInput
        label='Phone Number'
        mode='outlined'
        onChangeText={(text) => setPhoneNumber(text)}
        style={{ marginBottom: 20 }}
      />
      {isDriver && (
        <>
          <TextInput
            label='Car number'
            mode='outlined'
            onChangeText={(text) => setCarNumber(text)}
            theme={{
              colors: {
                placeholder: 'white',
                text: 'white',
                primary: 'white',
                background: '#FFD428',
              },
            }}
            style={{ marginBottom: 20 }}
          />
          <TextInput
            label='Total Seats'
            mode='outlined'
            onChangeText={(text) => setTotalSeats(text)}
            theme={{
              colors: {
                placeholder: 'white',
                text: 'white',
                primary: 'white',
                background: '#FFD428',
              },
            }}
            style={{ marginBottom: 30 }}
          />
        </>
      )}
      <Button mode='contained' onPress={() => {}} style={[globalStyles.btn, { width: '100%' }]}>
        <Text style={globalStyles.btnText}>Sign Up</Text>
      </Button>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

export default SignUp;
