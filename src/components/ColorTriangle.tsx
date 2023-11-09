import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import React from 'react';

import {ShapeProps} from '../types';
import DoubleTapView from './DoubleTapView';
import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

const ColorTriangle: React.FC<ShapeProps> = ({position}) => {
  const [color, isFetchingColor, toggleColor] = useRandomColor();
  const size = useRandomSize();

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
          <Svg width="100%" height="100%">
            <Polygon points={points} fill={color} />
          </Svg>
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
