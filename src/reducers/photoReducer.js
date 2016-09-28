import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions/photos';

const INITAIL_STATE = {
  photoGrid: { photos: [] }
}

export default function(state = INITAIL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:// start fetching posts and set loading = true
  	return { ...state, photoGrid: {photos:[] } }; 
    default:
    return state;
  }
}
/*export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      const photosById = _.mapKeys(action.payload.data, 'id');
      return _.extend({}, state, photosById);
  }

  return state;
}*/