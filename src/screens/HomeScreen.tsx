import {View} from 'react-native';
import React from 'react';

import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Square position={{x: 250, y: 250}} />
      <Circle position={{x: 350, y: 350}} />
      <Triangle position={{x: 250, y: 500}} />
    </View>
  );
};

export default HomeScreen;
