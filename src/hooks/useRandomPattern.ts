import {useEffect, useState} from 'react';

import fetchRemotePattern from '../apis/fetchPattern';
import localPatterns from '../patterns';

const generateRandomPattern = () => {
  return localPatterns[Math.floor(Math.random() * localPatterns.length)];
};

const useRandomPattern: () => [
  string | undefined,
  boolean,
  () => void,
] = () => {
  const [pattern, setPattern] = useState<string | undefined>();
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
