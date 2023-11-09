import {ActivityIndicator, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import DoubleTapView from './DoubleTapView';
import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

const Circle: React.FC<ShapeProps> = ({position}) => {
  const [color, isFetchingColor, toggleColor] = useRandomColor();
  const diameter = useRandomSize();

  const circleStyle: StyleProp<ViewStyle> = {
    width: diameter,
    height: diameter,
    backgroundColor: color,
    borderRadius: diameter,
    position: 'absolute',
    left: position.x - diameter / 2,
    top: position.y - diameter / 2,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <DoubleTapView onDoubleTap={toggleColor}>
      <View style={circleStyle}>
        {isFetchingColor ? <ActivityIndicator /> : null}
      </View>
    </DoubleTapView>
  );
};

export default Circle;
