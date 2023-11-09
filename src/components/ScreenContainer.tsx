import {TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

const ScreenContainer = ({Component}) => {
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
