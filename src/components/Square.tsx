import {
  ActivityIndicator,
  Image,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const Square: React.FC<ShapeProps> = ({position}) => {
  const [pattern, isFetchingPattern, togglePattern] = useRandomPattern();
  const size = useRandomSize();

  const squareStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    position: 'absolute',
    left: position.x - size / 2,
    top: position.y - size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={squareStyle}>
      {isFetchingPattern ? (
        <ActivityIndicator />
      ) : (
        <Image
          style={{width: size, height: size}}
          resizeMode="cover"
          source={typeof pattern === 'string' ? {uri: pattern} : pattern}
        />
      )}
    </View>
  );
};

export default Square;
