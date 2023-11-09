import {useEffect, useState} from 'react';

import fetchRemoteColor from '../apis/fetchColor';

const generateRandomColor = () => {
  // From https://css-tricks.com/snippets/javascript/random-hex-color/
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const useRandomColor = () => {
  const [color, setColor] = useState(null);
  const [isFetchingColor, setIsFetchingColor] = useState(false);

  const fetchColor = () => {
    setIsFetchingColor(true);

    fetchRemoteColor({
      onSuccess: color => {
        setIsFetchingColor(false);
        setColor(color);
      },
      onError: () => {
        setIsFetchingColor(false);
        setColor(generateRandomColor());
      },
    });
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return [color, isFetchingColor, fetchColor];
};

export default useRandomColor;
