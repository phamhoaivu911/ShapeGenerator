import {ActivityIndicator, View} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import React from 'react';

import {ShapeProps} from '../types';
import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

const ColorTriangle: React.FC<ShapeProps> = ({position}) => {
  const [color, toggleColor] = useRandomColor();
  const size = useRandomSize();

  const points = `0,${size} ${size / 2},0 ${size},${size}`;

  return (
    <View
      style={{
        position: 'absolute',
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {color ? (
        <Svg width="100%" height="100%">
          <Polygon points={points} fill={color} />
        </Svg>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default ColorTriangle;
