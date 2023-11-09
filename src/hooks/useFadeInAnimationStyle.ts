import {Animated} from 'react-native';
import {useEffect, useRef} from 'react';

const useFadeInAnimationStyle = (size, ready = false) => {
  const fadeAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    if (ready) {
      Animated.timing(fadeAnimation.current, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  }, [ready]);

  const scale = fadeAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1 / size, 1],
  });
  const opacity = fadeAnimation.current;

  return {
    transform: [{scale}],
    opacity,
  };
};

export default useFadeInAnimationStyle;
