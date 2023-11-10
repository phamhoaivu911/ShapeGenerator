import {
  ActivityIndicator,
  Animated,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import DoubleTapView from './DoubleTapView';
import useFadeInAnimationStyle from '../hooks/useFadeInAnimationStyle';
import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

const Circle: React.FC<ShapeProps> = ({position}) => {
  const diameter = useRandomSize();
  const [color, isFetchingColor, toggleColor] = useRandomColor();
  const fadeInAnimationStyle = useFadeInAnimationStyle(
    diameter,
    !isFetchingColor,
  );

  const circleStyle: StyleProp<ViewStyle> = {
    width: diameter,
    height: diameter,
    backgroundColor: color,
    borderRadius: diameter,
  };

  return (
    <DoubleTapView onDoubleTap={toggleColor}>
      <View
        style={{
          width: diameter,
          height: diameter,
          position: 'absolute',
          left: position.x - diameter / 2,
          top: position.y - diameter / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[circleStyle, fadeInAnimationStyle]}></Animated.View>
        {isFetchingColor ? (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator />
          </View>
        ) : null}
      </View>
    </DoubleTapView>
  );
};

export default Circle;
