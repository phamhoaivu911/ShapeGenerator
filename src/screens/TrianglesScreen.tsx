import React from 'react';

import ScreenContainer from '../components/ScreenContainer';
import Triangle from '../components/Triangle';

const TrianglesScreen = () => {
  return (
    <ScreenContainer>
      {pressedPositions => {
        return pressedPositions.map((position, index) => {
          return <Triangle key={index} position={position} />;
        });
      }}
    </ScreenContainer>
  );
};

export default TrianglesScreen;
