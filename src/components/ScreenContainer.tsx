import {TouchableWithoutFeedback, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RNShake from 'react-native-shake';
import React, {useEffect} from 'react';

import {ShapeProps} from '../types';

interface ScreenContainerProps {
  Component: React.FC<ShapeProps>;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({Component}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [pressedPositions, setPressedPositions] = React.useState([]);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setPressedPositions([]);
    });

    return subscription.remove;
  }, [setPressedPositions]);

  const handlePress = event => {
    const {locationX, locationY} = event.nativeEvent;

    setPressedPositions(positions => [
      ...positions,
      {x: locationX, y: locationY},
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{flex: 1, ...backgroundStyle}}>
        {pressedPositions.map((position, index) => {
          return <Component key={index} position={position} />;
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScreenContainer;
