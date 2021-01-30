import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import globalStyles from '../globalStyles';
import firebase from 'firebase';
import { Picker } from '@react-native-picker/picker';
interface SignUpProps {
  isDriver?: boolean;
  goToMainScreen: () => void;
}
function SignUp({ isDriver, goToMainScreen }: SignUpProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePwd, setHidePwd] = useState(true);
  const [carNumber, setCarNumber] = useState('');
  const [totalSeats, setTotalSeats] = useState('4');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSignUp = () => {
    const setCommonData = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection(isDriver ? 'drivers' : 'passengers')
          .doc(firebase?.auth()?.currentUser?.uid)
          .set(
            isDriver
              ? { ...setCommonData, carNumber: carNumber, totalSeats: totalSeats }
              : setCommonData
          );
        result && goToMainScreen();
      })
      .catch((error) => console.log(error));
  };
  return (
    <ScrollView
      style={{
        backgroundColor: '#FFD428',
        height: '100%',
        padding: 30,
      }}
    >
      <TextInput
        label='Name'
        mode='outlined'
        onChangeText={(text) => setName(text)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label='Email'
        mode='outlined'
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 20 }}
      />
      <View>
        <TextInput
          label='Password'
          mode='outlined'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePwd}
          style={{ marginBottom: 20, flex: 1 }}
        />
        <IconButton
          icon={hidePwd ? 'eye-off' : 'eye'}
          size={29}
          onPress={() => setHidePwd(!hidePwd)}
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
            style={{ marginBottom: 20 }}
          />
          <Text style={{ color: 'white' }}>Total No of Seats:</Text>
          <View style={{ borderWidth: 1, borderColor: '#FFF', marginBottom: 30 }}>
            <Picker
              selectedValue={totalSeats}
              style={{ width: '100%', color: '#FFF' }}
              onValueChange={(itemValue) => setTotalSeats(itemValue as string)}
            >
              <Picker.Item label='4' value='4' />
              <Picker.Item label='6' value='6' />
              <Picker.Item label='8' value='8' />
            </Picker>
          </View>
        </>
      )}
      <Button mode='contained' onPress={onSignUp} style={[globalStyles.btn, { width: '100%' }]}>
        <Text style={globalStyles.btnText}>Sign Up</Text>
      </Button>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

export default SignUp;
