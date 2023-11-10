import {Animated, PanResponder, StyleSheet, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {Svg, G} from 'react-native-svg';
import React, {useRef, useState} from 'react';

import Square from '../components/Square';

const ZoomableScreen = () => {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const {width, height} = Dimensions.get('window');
  const pan = useRef(new Animated.ValueXY()).current;
  const pinchScale = useRef(new Animated.Value(1)).current;
  const pinchPan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        pan.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  const onPinchGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          scale: pinchScale,
          translationX: pinchPan.x,
          translationY: pinchPan.y,
        },
      },
    ],
    {useNativeDriver: true},
  );
  const onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      setScale(scale * event.nativeEvent.scale);
      setTranslateX(translateX + event.nativeEvent.translationX / scale);
      setTranslateY(translateY + event.nativeEvent.translationY / scale);
      pinchScale.setValue(1);
      pinchPan.setValue({x: 0, y: 0});
    }
  };

  return (
    <GestureHandlerRootView>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}>
        <Animated.View style={{flex: 1}}>
          <Svg style={StyleSheet.absoluteFill}>
            <G
              transform={[
                {translateX: pan.x},
                {translateY: pan.y},
                {translateX: pinchPan.x},
                {translateY: pinchPan.y},
                {scale},
                {translateX},
                {translateY},
              ]}>
              <Square position={{x: 50, y: 50}} />
              <Square position={{x: 50, y: 150}} />
              <Square position={{x: 50, y: 350}} />
            </G>
          </Svg>
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ZoomableScreen;
