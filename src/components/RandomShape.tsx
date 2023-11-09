import React from 'react';

import useRandomShape from '../hooks/useRandomShape';

interface RandomShapeProps {
  position: {
    x: number;
    y: number;
  };
}

const RandomShape: React.FC<RandomShapeProps> = ({position}) => {
  const Shape = useRandomShape();

  return <Shape position={position} />;
};

export default RandomShape;
