import axios from 'axios';
import { FETCH_PHOTOS } from './types'

/*export function fetchPhotos() {
  const request = axios.get('http://www.mocky.io/v2/57eba5a411000076142d35d9');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ 
        type: 'FETCH_PHOTOS', 
        payload: data 
      })
    });
  };
}*/

export function fetchPhotos() {
  const request = axios.get('http://www.mocky.io/v2/57eba5a411000076142d35d9');

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}