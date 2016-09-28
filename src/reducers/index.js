import { combineReducers } from 'redux';
import PhotoList from './photoList'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  // posts: (state = [], action) => action.payload || state
  photos: PhotoList
});

export default rootReducer;
