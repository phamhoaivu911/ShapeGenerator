import React from 'react';

import Circle from '../components/Circle';
import ScreenContainer from '../components/ScreenContainer';

const SquaresScreen = () => {
  return (
    <ScreenContainer>
      {pressedPositions => {
        return pressedPositions.map((position, index) => {
          return <Circle key={index} position={position} />;
        });
      }}
    </ScreenContainer>
  );
};

export default SquaresScreen;
