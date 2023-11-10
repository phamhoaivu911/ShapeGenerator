import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import React from 'react';

import {ShapeProps} from '../../types';
import DoubleTapView from '../DoubleTapView';
import useFadeInAnimationStyle from '../../hooks/useFadeInAnimationStyle';
import useRandomColor from '../../hooks/useRandomColor';
import useRandomSize from '../../hooks/useRandomSize';

const ColorTriangle: React.FC<ShapeProps> = ({position}) => {
  const [color, isFetchingColor, toggleColor] = useRandomColor();
  const size = useRandomSize();
  const fadeInAnimationStyle = useFadeInAnimationStyle(size, !isFetchingColor);

  const points = `0,${size} ${size / 2},0 ${size},${size}`;

  return (
    <DoubleTapView onDoubleTap={toggleColor}>
      <View
        style={{
          position: 'absolute',
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
        }}>
        {color ? (
          <Animated.View style={fadeInAnimationStyle}>
            <Svg width="100%" height="100%">
              <Polygon points={points} fill={color} />
            </Svg>
          </Animated.View>
        ) : null}
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

export default ColorTriangle;
