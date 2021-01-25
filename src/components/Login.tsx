import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <TextInput
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
      />
      <Button mode='contained' onPress={() => {}} style={[globalStyles.btn, { width: '100%' }]}>
        <Text style={globalStyles.btnText}>Login</Text>
      </Button>
    </View>
  );
}

export default Login;
