import {View} from 'react-native';
import React from 'react';

import Square from '../components/Square';

const SquaresScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Square position={{x: 250, y: 250}} />
      <Square position={{x: 350, y: 350}} />
      <Square position={{x: 250, y: 500}} />
    </View>
  );
};

export default SquaresScreen;
