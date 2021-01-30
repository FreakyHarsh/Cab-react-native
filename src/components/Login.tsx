import firebase from 'firebase';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import globalStyles from '../globalStyles';
import { Actions, useStore } from '../store/store';
import LoadingButton from './LoadingButton';

function Login({ goToMainScreen, isDriver }: { goToMainScreen: () => void; isDriver?: boolean }) {
  const { state, dispatch } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePwd, setHidePwd] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) =>
        firebase
          .firestore()
          .collection(isDriver ? 'drivers' : 'passengers')
          .doc(firebase?.auth()?.currentUser?.uid)
          .get()
          .then((res) => {
            const { name, phoneNumber }: any = res.data();
            setLoading(false);
            dispatch({ type: Actions.setName, payload: name });
            dispatch({ type: Actions.setPhoneNumber, payload: phoneNumber });
            goToMainScreen();
          })
      )
      .catch((result) => {
        console.log(result);
        setLoading(false);
      });
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
        style={{ marginBottom: 20 }}
      />
      <View>
        <TextInput
          label='Password'
          mode='outlined'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePwd}
        />
        <IconButton
          icon={hidePwd ? 'eye-off' : 'eye'}
          size={29}
          onPress={() => setHidePwd(!hidePwd)}
          style={{ position: 'absolute', zIndex: 1, right: 0, top: 7 }}
        />
      </View>

      {loading ? (
        <LoadingButton loading={loading} />
      ) : (
        <Button
          mode='contained'
          onPress={onLogin}
          style={[globalStyles.btn, { width: '100%', marginTop: 20 }]}
        >
          <Text style={globalStyles.btnText}>Login</Text>
        </Button>
      )}
    </View>
  );
}

export default Login;
