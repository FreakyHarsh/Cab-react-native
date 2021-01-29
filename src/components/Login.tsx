import firebase from 'firebase';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import globalStyles from '../globalStyles';
import { Actions, useStore } from '../store/store';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

function Login({ goToMainScreen }: { goToMainScreen: () => void }) {
  const { state, dispatch } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePwd, setHidePwd] = useState(true);
  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) =>
        firebase
          .firestore()
          .collection('passengers')
          .doc(firebase?.auth()?.currentUser?.uid)
          .get()
          .then((res) => {
            const { name, phoneNumber }: any = res.data();
            dispatch({ type: Actions.setName, payload: name });
            dispatch({ type: Actions.setPhoneNumber, payload: phoneNumber });
            goToMainScreen();
          })
      )
      .catch((result) => console.log(result));
  };
  return (
    <View
      style={{
        backgroundColor: '#FFD428',
        height: '100%',
        padding: 30,
      }}
    >
      <TextInput
        label='Email'
        mode='outlined'
        value={email}
        onChangeText={(text) => setEmail(text)}
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
      {/* <TextInput
        label='Password'
        mode='outlined'
        value={password}
        onChangeText={(text) => setPassword(text)}
        theme={{
          colors: {
            placeholder: 'white',
            text: 'white',
            primary: 'white',
            background: '#FFD428',
          },
        }}
        style={{ marginBottom: 20, borderRadius: 10 }}
      /> */}
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
      <Button
        mode='contained'
        onPress={onLogin}
        style={[globalStyles.btn, { width: '100%', marginTop: 20 }]}
      >
        <Text style={globalStyles.btnText}>Login</Text>
      </Button>
    </View>
  );
}

export default Login;
