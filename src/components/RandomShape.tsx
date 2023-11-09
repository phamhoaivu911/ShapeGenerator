import React from 'react';

import {ShapeProps} from '../types';
import useRandomShape from '../hooks/useRandomShape';

const RandomShape: React.FC<ShapeProps> = ({position}) => {
  const Shape = useRandomShape();

  return <Shape position={position} />;
};

export default RandomShape;
