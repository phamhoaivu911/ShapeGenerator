import {useEffect, useState} from 'react';

import fetchPattern from '../apis/fetchPattern';

const generateRandomPatern = () => {
  return null;
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
