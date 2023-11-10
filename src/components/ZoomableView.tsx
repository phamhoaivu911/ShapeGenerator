import {Animated, StyleSheet} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';
import React, {ReactNode, useRef} from 'react';

const ZoomableView: React.FC<{children: ReactNode}> = ({children}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPinchGestureEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: false,
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
        <Animated.View style={styles.container}>
          <PanGestureHandler>
            <Animated.View style={[styles.container, {transform: [{scale}]}]}>
              {children}
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ZoomableView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});
