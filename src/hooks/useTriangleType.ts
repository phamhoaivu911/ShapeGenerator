import {useRef} from 'react';

import ColorTriangle from '../components/Triangle/ColorTriangle';
import PatternTriangle from '../components/Triangle/PatternTriangle';

const TRIANGLES = [ColorTriangle, PatternTriangle];

const useTriangleType = () => {
  const triangleRef = useRef(
    TRIANGLES[Math.floor(Math.random() * TRIANGLES.length)],
  );

  return triangleRef.current;
};

export default useTriangleType;
