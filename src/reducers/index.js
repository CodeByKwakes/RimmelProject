import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: (state = [], action) => action.payload || state
});

export default rootReducer;
