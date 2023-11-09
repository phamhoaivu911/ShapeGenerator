import React from 'react';

import ScreenContainer from '../components/ScreenContainer';
import Square from '../components/Square';

const SquaresScreen = () => {
  return (
    <ScreenContainer>
      {pressedPositions => {
        return pressedPositions.map((position, index) => {
          return <Square key={index} position={position} />;
        });
      }}
    </ScreenContainer>
  );
};

export default SquaresScreen;
