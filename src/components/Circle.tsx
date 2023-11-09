import {
  ActivityIndicator,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
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
    <TouchableWithoutFeedback onPress={toggleColor}>
      <View style={circleStyle}>
        {isFetchingColor ? <ActivityIndicator /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Circle;
