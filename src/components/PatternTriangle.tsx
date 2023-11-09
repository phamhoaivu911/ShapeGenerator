import {Svg, Polygon, Defs, Pattern, Image as SvgImage} from 'react-native-svg';
import {View} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const PatternTriangle: React.FC<ShapeProps> = ({position}) => {
  const size = useRandomSize();
  const [pattern, togglePattern] = useRandomPattern();

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
        <Defs>
          <Pattern
            id="image"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}>
            <SvgImage
              href={pattern}
              x="0"
              y="0"
              width="1"
              height="1"
              preserveAspectRatio="xMidYMid slice"
            />
          </Pattern>
        </Defs>
        <Polygon points={points} fill="url(#image)" />
      </Svg>
    </View>
  );
};

export default PatternTriangle;
