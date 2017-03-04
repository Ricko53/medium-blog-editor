import { combineReducers } from 'redux';
import { defaultBlogData, defaultPosition } from '../data/default.js'

import {
  ADD_SECTION,
  DELETE_SECTION,
  CHANGE_IMAGE_SCALE,
  OPEN_DRAG_DOWN_PAGE,
} from '../actions';

function addTransaction(state, action) {
  const newState = [...state, action.transaction];
  console.log('newState', newState)
  return newState;
}

function changeImageScale(state, action) {
  let newState = [].concat(state)
  newState[action.id].fullScreen = action.val
  return newState
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
}

function initDragDownPage(state, action) {
  let newState = Object.assign({}, state)
  newState.open = action.open
  newState.position = action.position
  return newState
}

function dragDownPosition(state = defaultPosition, action) {
  switch(action.type){
    case OPEN_DRAG_DOWN_PAGE:
      return initDragDownPage(state, action)
    default:
      return state;
  }
}

export default combineReducers({
  transactionsBlog,
  dragDownPosition
});
