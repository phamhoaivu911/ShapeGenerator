import {Image, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const Square: React.FC<ShapeProps> = ({position}) => {
  const [pattern, togglePattern] = useRandomPattern();
  const size = useRandomSize();

  // Define a style object with the specified size and color
  const squareStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    position: 'absolute',
    left: position.x - size / 2,
    top: position.y - size / 2,
  };

  return (
    <Image
      with={size}
      height={size}
      resizeMode="cover"
      source={{uri: pattern}}
      style={squareStyle}
    />
  );
};

export default Square;
