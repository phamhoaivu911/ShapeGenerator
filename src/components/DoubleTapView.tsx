import {View, TouchableWithoutFeedback} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

type DoubleTapViewProps = {
  onDoubleTap: () => void;
  children: JSX.Element;
  doubleTapDelay?: number;
};

const DoubleTapView: React.FC<DoubleTapViewProps> = ({
  onDoubleTap,
  children,
  doubleTapDelay = 300,
}) => {
  const [tapCount, setTapCount] = useState(0);
  const doubleTapRef = useRef(null);
  const doubleTapTimeoutRef = useRef<
    ReturnType<typeof setTimeout> | undefined
  >();

  useEffect(() => {
    if (tapCount === 2) {
      onDoubleTap();
      setTapCount(0);
    }
  }, [tapCount, onDoubleTap]);

  const handleDoubleTap = () => {
    setTapCount(prevCount => prevCount + 1);
    clearTimeout(doubleTapTimeoutRef.current);
    doubleTapTimeoutRef.current = setTimeout(() => {
      setTapCount(0);
    }, doubleTapDelay);
  };

  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DoubleTapView;
