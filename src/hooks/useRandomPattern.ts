import {useEffect, useState} from 'react';

import fetchPattern from '../apis/fetchPattern';
import localPatterns from '../patterns';

const generateRandomPattern = () => {
  return localPatterns[Math.floor(Math.random() * localPatterns.length)];
};

const useRandomPattern = () => {
  const [pattern, setPattern] = useState(null);

  useEffect(() => {
    fetchPattern({
      onSuccess: setPattern,
      onError: () => setPattern(generateRandomPattern()),
    });
  }, []);

  return [pattern, fetchPattern];
};

export default useRandomPattern;
