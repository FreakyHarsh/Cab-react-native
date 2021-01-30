import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function LoadingButton({ loading }: { loading?: boolean }) {
  return (
    <View style={{ marginTop: 20, backgroundColor: '#FFF', padding: 10, borderRadius: 15 }}>
      <ActivityIndicator color='#FFD428' size={35} animating={loading ?? true} />
    </View>
  );
}

export default LoadingButton;
