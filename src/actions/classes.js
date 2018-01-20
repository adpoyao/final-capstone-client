import * as types from './actionType';

export const fetchClassesSuccess = (classes) => ({
  type: types.FETCH_CLASSES_SUCCESS,
  classes,
});

export const fetchClassesRequest = () => ({
  type: types.FETCH_CLASSES_REQUEST,
});

export const fetchClassesError = (err) => ({
  type: types.FETCH_CLASSES_ERROR,
  err,
});

// Retrieve all classes students searched for by TeacherID
export const fetchClasses = teacherID => (dispatch, getState) => {
  dispatch(fetchClassesRequest());
  return fetch(`http://localhost:3000/api/classes/search/${teacherID}`)
  .then(res => res.json())
  .then(classes => dispatch(fetchClassesSuccess(classes)))
  .catch((err) => {
    dispatch(fetchClassesError(err));
  });
};
