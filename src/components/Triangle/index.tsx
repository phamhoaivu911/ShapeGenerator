import React from 'react';

import {ShapeProps} from '../../types';
import useTriangleType from '../../hooks/useTriangleType';

const Triangle: React.FC<ShapeProps> = ({position}) => {
  const TriangleType = useTriangleType();

  return <TriangleType position={position} />;
};

export default Triangle;
