import {TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

import {ShapeProps} from '../types';

interface ScreenContainerProps {
  Component: React.FC<ShapeProps>;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({Component}) => {
  const [pressedPositions, setPressedPositions] = React.useState([]);

  const handlePress = event => {
    const {locationX, locationY} = event.nativeEvent;

    setPressedPositions(positions => [
      ...positions,
      {x: locationX, y: locationY},
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{flex: 1}}>
        {pressedPositions.map((position, index) => {
          return <Component key={index} position={position} />;
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScreenContainer;
