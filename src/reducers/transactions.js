import { combineReducers } from 'redux';
import { defaultBlogData } from '../data/default.js'

import {
  ADD_SECTION,
  DELETE_SECTION,
  CHANGE_IMAGE_SCALE,
} from '../actions';

function addTransaction(state, action) {
  const newState = [...state, action.transaction];
  console.log('newState', newState)
  return newState;
}

function changeImageScale(state, action) {
  state[action.id].fullScreen = action.val
  return [].concat(state)
}

function transactionsBlog(state = defaultBlogData, action) {
  switch(action.type){
    case ADD_SECTION:
      return addTransaction(state, action);
    case DELETE_SECTION:
      return state;
    case CHANGE_IMAGE_SCALE:
      return changeImageScale(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  transactionsBlog
});
