import {showMessage} from 'react-native-flash-message';
import {useEffect, useState} from 'react';

import fetchRemoteColor from '../apis/fetchColor';

const generateRandomColor = () => {
  // From https://css-tricks.com/snippets/javascript/random-hex-color/
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const useRandomColor: () => [string | undefined, boolean, () => void] = () => {
  const [color, setColor] = useState<string | undefined>();
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
        showMessage({
          message: 'Notice',
          description:
            'Failed to fetch remote color, use random color from local instead.',
          type: 'warning',
        });
      },
    });
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return [color, isFetchingColor, fetchColor];
};

export default useRandomColor;
