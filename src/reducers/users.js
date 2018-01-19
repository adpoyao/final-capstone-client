// import * as types from '../actions/actionType';
//
// const initialState = {
//   users: [],
//   loading: false,
//   error: false,
// };
//
// const usersReducer = (state = initialState, action) => {
//   switch (action.type){
//     case types.FETCH_USERS_SUCCESS:
//       return Object.assign({}, state, {
//         users: action.users,
//         loading: false,
//         error: false,
//       });
//     case types.FETCH_USERS_REQUEST:
//       return Object.assign({}, state, {
//         loading: true,
//         error: false,
//       });
//     case types.FETCH_USERS_ERROR:
//       return Object.assign({}, state, {
//         loading: false,
//         error: action.err,
//       });
//   }
//   return state;
// };
//
// export default usersReducer;
