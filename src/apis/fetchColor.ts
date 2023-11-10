import {FetchInput} from '../types';

const fetchColor = ({onSuccess, onError}: FetchInput) => {
  fetch('https://www.colourlovers.com/api/colors/random?format=json')
    .then(response => response.json())
    .then(json => {
      onSuccess(`#${json[0].hex}`);
    })
    .catch(error => {
      onError(error);
    });
};

export default fetchColor;
