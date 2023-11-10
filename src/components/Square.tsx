import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';

import {ShapeProps} from '../types';
import DoubleTapView from './DoubleTapView';
import DraggableView from './DraggableView';
import useFadeInAnimationStyle from '../hooks/useFadeInAnimationStyle';
import useRandomPattern from '../hooks/useRandomPattern';
import useRandomSize from '../hooks/useRandomSize';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const Square: React.FC<ShapeProps> = ({position}) => {
  const [pattern, isFetchingPattern, togglePattern] = useRandomPattern();
  const size = useRandomSize();
  const fadeInAnimationStyle = useFadeInAnimationStyle(
    size,
    !isFetchingPattern,
  );

  return (
    <DraggableView size={size} position={position}>
      <DoubleTapView onDoubleTap={togglePattern}>
        <View style={{width: size, height: size}}>
          <AnimatedFastImage
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
    </DraggableView>
  );
};

export default Square;
