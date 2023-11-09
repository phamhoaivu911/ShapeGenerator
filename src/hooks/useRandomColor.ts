import {useEffect, useState} from 'react';

import fetchColor from '../apis/fetchColor';

const generateRandomColor = () => {
  // From https://css-tricks.com/snippets/javascript/random-hex-color/
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const useRandomColor = () => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    fetchColor({
      onSuccess: setColor,
      onError: () => setColor(generateRandomColor()),
    });
  }, []);

  return [color, fetchColor];
};

export default useRandomColor;
