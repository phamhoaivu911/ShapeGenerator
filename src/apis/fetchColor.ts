const fetchColor = ({onSuccess, onError}) => {
  fetch('https://www.colourlovers.com/api/colors/random?format=json')
    .then(response => response.json())
    .then(json => {
      onSuccess(`#${json[0].hex}`);
    })
    .catch(error => {
      console.error(error);
      onError(error);
    });
};

export default fetchColor;
