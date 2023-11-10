import {FetchInput} from '../types';

const fetchPattern = ({onSuccess, onError}: FetchInput) => {
  fetch('https://www.colourlovers.com/api/patterns/random?format=json')
    .then(response => response.json())
    .then(json => {
      onSuccess(json[0].imageUrl);
    })
    .catch(error => {
      console.error(error);
      onError(error);
    });
};

export default fetchPattern;
