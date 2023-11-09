import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import {Svg, Polygon, Defs, Pattern, Image as SvgImage} from 'react-native-svg';
import React from 'react';

import {ShapeProps} from '../types';
import DoubleTapView from './DoubleTapView';
import useFadeInAnimationStyle from '../hooks/useFadeInAnimationStyle';
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const PatternTriangle: React.FC<ShapeProps> = ({position}) => {
  const size = useRandomSize();
  const [pattern, isFetchingPattern, togglePattern] = useRandomPattern();
  const fadeInAnimationStyle = useFadeInAnimationStyle(
    size,
    !isFetchingPattern,
  );

  const points = `0,${size} ${size / 2},0 ${size},${size}`;

  return (
    <DoubleTapView onDoubleTap={togglePattern}>
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
        {pattern ? (
          <Animated.View
            style={{
              width: size,
              height: size,
              ...fadeInAnimationStyle,
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
          </Animated.View>
        ) : null}
        {isFetchingPattern ? (
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

export default PatternTriangle;
