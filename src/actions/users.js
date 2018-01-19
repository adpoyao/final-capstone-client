// 'use strict';
//
// import { FETCH_USERS,
// FETCH_USERS_SUCCESS,
// FETCH_USERS_REQUEST,
// FETCH_USERS_ERROR, } from './actionType';
//
// export const fetchUsersSuccess = (users) => ({
//   type: FETCH_USERS_SUCCESS,
//   users,
// });
//
// export const fetchUsersRequest = () => ({
//   type: FETCH_USERS_REQUEST,
// });
//
// export const fetchUsersError = (err) => ({
//   type: FETCH_USERS_ERROR,
//   err,
// });
//
// export const fetchUsers = username => (dispatch, getState) => {
//   dispatch(fetchUsersRequest());
//   return fetch('http://localhost:3000/api/users')
//   .then(res => res.json())
//   .then(users => dispatch(fetchUsersSuccess(users)))
//   .catch((err) => {
//     //TODO: Test error coverage
//     console.log(err);
//     dispatch(fetchUsersError(err));
//   });
//
// };
