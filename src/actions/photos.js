import axios from 'axios';

//Photo List
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos() {
  const request = axios.get('http://www.mocky.io/v2/57eba5a411000076142d35d9')

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}