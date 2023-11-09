import {useWindowDimensions} from 'react-native';

const MAX_WIDTH_PERCENTAGE = 0.45;
const MIN_WIDTH_PERCENTAGE = 0.1;

const useRandomSize = () => {
  const {width, height} = useWindowDimensions();

  const min = Math.max(width, height) * MIN_WIDTH_PERCENTAGE;
  const max = Math.min(width, height) * MAX_WIDTH_PERCENTAGE;

  return Math.random() * (max - min) + min;
};

export default useRandomSize;
