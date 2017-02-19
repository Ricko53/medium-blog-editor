import { combineReducers } from 'redux';
import { defaultBlogData } from '../data/default.js'

import {
  ADD_SECTION,
  DELETE_SECTION,
} from '../actions';

function transactionsBlog(state = defaultBlogData, action) {
  switch(action.type){
    case ADD_SECTION:
      return state;
    case DELETE_SECTION:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  transactionsBlog
});
