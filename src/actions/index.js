export const ADD_SECTION = 'ADD_SECTION'
export const DELETE_SECTION = 'DELETE_SECTION'

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

// export function addTransaction(transaction) {
//   return (dispatch, getState) => {
//     const addedResult = dispatch(createTransaction(transaction));
//     dispatch(requestSum(getState().transactions.transactions));
//     return addedResult;
//   };
// }