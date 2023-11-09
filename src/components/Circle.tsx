import {View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

const Circle: React.FC<ShapeProps> = ({position}) => {
  const [color, toggleColor] = useRandomColor();
  const diameter = useRandomSize();

  // Define a style object with the specified diameter and color
  const circleStyle: StyleProp<ViewStyle> = {
    width: diameter,
    height: diameter,
    backgroundColor: color,
    borderRadius: diameter,
    position: 'absolute',
    left: position.x - diameter / 2,
    top: position.y - diameter / 2,
  };

  return <View style={circleStyle} />;
};

export default Circle;
