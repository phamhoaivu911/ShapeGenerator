import {View} from 'react-native';
import React from 'react';

import Circle from '../components/Circle';

const SquaresScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Circle position={{x: 250, y: 250}} />
      <Circle position={{x: 350, y: 350}} />
      <Circle position={{x: 250, y: 500}} />
    </View>
  );
};

export default SquaresScreen;
