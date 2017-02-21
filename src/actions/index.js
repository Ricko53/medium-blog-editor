export const ADD_SECTION = 'ADD_SECTION'
export const DELETE_SECTION = 'DELETE_SECTION'
export const CHANGE_IMAGE_SCALE = 'CHANGE_IMAGE_SCALE'

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

// export function addTransaction(transaction) {
//   return (dispatch, getState) => {
//     const addedResult = dispatch(createTransaction(transaction));
//     dispatch(requestSum(getState().transactions.transactions));
//     return addedResult;
//   };
// }