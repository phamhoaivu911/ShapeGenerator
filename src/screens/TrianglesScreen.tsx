import {View} from 'react-native';
import React from 'react';

import Triangle from '../components/Triangle';

const TrianglesScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Triangle position={{x: 250, y: 250}} />
      <Triangle position={{x: 350, y: 350}} />
      <Triangle position={{x: 250, y: 500}} />
    </View>
  );
};

export default TrianglesScreen;
