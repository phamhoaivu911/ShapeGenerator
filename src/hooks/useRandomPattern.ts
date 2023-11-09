import {useEffect, useState} from 'react';

import fetchRemotePattern from '../apis/fetchPattern';
import localPatterns from '../patterns';

const generateRandomPattern = () => {
  return localPatterns[Math.floor(Math.random() * localPatterns.length)];
};

const useRandomPattern = () => {
  const [pattern, setPattern] = useState(null);
  const [isFetchingPattern, setIsFetchingPattern] = useState(false);

  const fetchPattern = () => {
    setIsFetchingPattern(true);

    fetchRemotePattern({
      onSuccess: pattern => {
        setIsFetchingPattern(false);
        setPattern(pattern);
      },
      onError: () => {
        setIsFetchingPattern(false);
        setPattern(generateRandomPattern());
      },
    });
  };

  useEffect(() => {
    fetchPattern();
  }, []);

  return [pattern, isFetchingPattern, fetchPattern];
};

export default useRandomPattern;
