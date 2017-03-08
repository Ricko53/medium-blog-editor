export const ADD_SECTION = 'ADD_SECTION'
export const DELETE_SECTION = 'DELETE_SECTION'
export const CHANGE_IMAGE_SCALE = 'CHANGE_IMAGE_SCALE'
export const OPEN_DRAG_DOWN_PAGE = 'OPEN_DRAG_DOWN_PAGE'
export const CHANGE_BLOG_SORT = 'CHANGE_BLOG_SORT'

export function createTransaction(transaction) {
  return {
    type: ADD_SECTION,
    transaction
  };
}

export function deleteTransaction(id) {
  return {
    type: DELETE_SECTION,
    id
  };
}

export function changeImageScale(id, val) {
  return {
    type: CHANGE_IMAGE_SCALE,
    id,
    val
  }
}

export function changeBlogSort(arr) {
  return {
    type: CHANGE_BLOG_SORT,
    sequence: arr
  }
}

export function openDragDownPage(open, position) {
  return {
    type: OPEN_DRAG_DOWN_PAGE,
    open,
    position
  }
}

// export function addTransaction(transaction) {
//   return (dispatch, getState) => {
//     const addedResult = dispatch(createTransaction(transaction));
//     dispatch(requestSum(getState().transactions.transactions));
//     return addedResult;
//   };
// }