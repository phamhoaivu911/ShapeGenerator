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
import DraggableView from './DraggableView';
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
    <DraggableView size={diameter} position={position}>
      <DoubleTapView onDoubleTap={toggleColor}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View style={[circleStyle, fadeInAnimationStyle]} />
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
    </DraggableView>
  );
};

export default Circle;
