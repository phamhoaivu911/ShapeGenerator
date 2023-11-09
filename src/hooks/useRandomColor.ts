import {useState} from 'react';

const generateRandomColor = () => {
  // From https://css-tricks.com/snippets/javascript/random-hex-color/
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const useRandomColor = () => {
  const [color, setColor] = useState(generateRandomColor());
  const toggle = () => setColor(generateRandomColor());

  return [color, toggle];
};

export default useRandomColor;
