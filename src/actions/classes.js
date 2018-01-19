// 'use strict';
//
// import { FETCH_CLASSES,
// FETCH_CLASSES_SUCCESS,
// FETCH_CLASSES_REQUEST,
// FETCH_CLASSES_ERROR, } from './actionType';
//
// export const fetchClassesSuccess = (classes) => ({
//   type: FETCH_CLASSES_SUCCESS,
//   classes,
// });
//
// export const fetchClassesRequest = () => ({
//   type: FETCH_CLASSES_REQUEST,
// });
//
// export const fetchClassesError = (err) => ({
//   type: FETCH_CLASSES_ERROR,
//   err,
// });
//
// export const fetchClasses = username => (dispatch, getState) => {
//   dispatch(fetchClassesRequest());
//   return fetch('http://localhost:3000/api/classes')
//   .then(res => res.json())
//   .then(classes => dispatch(fetchClassesSuccess(classes)))
//   .catch((err) => {
//     //TODO: Test error coverage
//     console.log(err);
//     dispatch(fetchClassesError(err));
//   });
//
// };
