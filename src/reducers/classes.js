// import * as types from '../actions/actionType';

// const initialState = {
//   classes: [],
//   loading: false,
//   error: false,
// };

// const classesReducer = (state = initialState, action) => {
//   switch (action.type){
//     case types.FETCH_CLASSES_SUCCESS:
//       return Object.assign({}, state, {
//         classes: action.classes,
//         loading: false,
//         error: false,
//       });
//     case types.FETCH_CLASSES_REQUEST:
//       return Object.assign({}, state, {
//         loading: true,
//         error: false,
//       });
//     case types.FETCH_CLASSES_ERROR:
//       return Object.assign({}, state, {
//         loading: false,
//         error: action.err,
//       });
//   }
//   return state;
// };

// export default classesReducer;
