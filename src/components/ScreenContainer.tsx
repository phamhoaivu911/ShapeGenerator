import {TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

const ScreenContainer = ({children}) => {
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
      <View style={{flex: 1}}>{children(pressedPositions)}</View>
    </TouchableWithoutFeedback>
  );
};

export default ScreenContainer;
