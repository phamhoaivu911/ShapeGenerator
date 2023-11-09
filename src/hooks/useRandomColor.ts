// From https://css-tricks.com/snippets/javascript/random-hex-color/

const useRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export default useRandomColor;
