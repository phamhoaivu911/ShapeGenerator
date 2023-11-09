import {useRef} from 'react';

import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';

const COMPONENTS = [Circle, Square, Triangle];

const useRandomShape = () => {
  const shapeRef = useRef(
    COMPONENTS[Math.floor(Math.random() * COMPONENTS.length)],
  );

  return shapeRef.current;
};

export default useRandomShape;
