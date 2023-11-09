import {Svg, Polygon} from 'react-native-svg';
import {View} from 'react-native';
import React from 'react';

import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

interface TriangleProps {
  position: {
    x: number;
    y: number;
  };
}

const ColorTriangle: React.FC<TriangleProps> = ({position}) => {
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
      }}>
      <Svg width="100%" height="100%">
        <Polygon points={points} fill={color} />
      </Svg>
    </View>
  );
};

export default ColorTriangle;
