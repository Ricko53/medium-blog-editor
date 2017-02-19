import { combineReducers } from 'redux';
import { defaultBlogData } from '../data/default.js'

import {
  ADD_SECTION,
  DELETE_SECTION,
} from '../actions';

function addTransaction(state, action) {
  const newState = [...state, action.transaction];
  console.log('newState', newState)
  return newState;
}

function transactionsBlog(state = defaultBlogData, action) {
  switch(action.type){
    case ADD_SECTION:
      return addTransaction(state, action);
    case DELETE_SECTION:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  transactionsBlog
});
