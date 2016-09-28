import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      const photosById = _.mapKeys(action.payload.data, 'id');
      return _.extend({}, state, photosById);
  }

  return state;
}