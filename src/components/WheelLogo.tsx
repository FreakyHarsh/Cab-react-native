import React from 'react';
import { Image } from 'react-native';

function WheelLogo() {
  return (
    <Image
      source={require('../../assets/images/sw.png')}
      style={{ width: 100, height: 100 }}
      resizeMode={'cover'}
    />
  );
}

export default WheelLogo;
