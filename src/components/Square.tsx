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
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const Square: React.FC<ShapeProps> = ({position}) => {
  const [pattern, isFetchingPattern, togglePattern] = useRandomPattern();
  const size = useRandomSize();
  const fadeInAnimationStyle = useFadeInAnimationStyle(
    size,
    !isFetchingPattern,
  );

  const squareStyle: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    position: 'absolute',
    left: position.x - size / 2,
    top: position.y - size / 2,
  };

  return (
    <DoubleTapView onDoubleTap={togglePattern}>
      <View style={squareStyle}>
        <Animated.Image
          style={{width: size, height: size, ...fadeInAnimationStyle}}
          resizeMode="cover"
          source={typeof pattern === 'string' ? {uri: pattern} : pattern}
        />
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

export default Square;
