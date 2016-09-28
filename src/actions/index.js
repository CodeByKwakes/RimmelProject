import axios from 'axios';

export function fetchPosts() {
  const request = axios.get('http://www.mocky.io/v2/57eba5a411000076142d35d9');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'FETCH_POSTS', payload: data })
    });
  };
}