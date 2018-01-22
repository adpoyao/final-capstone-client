import * as types from './actionType';

export const fetchStudentsSuccess = (students) => ({
  type: types.FETCH_STUDENTS_SUCCESS,
  students,
});

export const fetchStudentsRequest = () => ({
  type: types.FETCH_STUDENTS_REQUEST,
});

export const fetchStudentsError = (err) => ({
  type: types.FETCH_STUDENTS_ERROR,
  err,
});

// Retrieve all enrolled students of the requesting teacher by TeacherID
export const fetchStudents = teacherID => (dispatch, getState) => {
  dispatch(fetchStudentsRequest());
  return fetch(`http://localhost:3000/api/students/${teacherID}`)
  .then(res => res.json())
  .then(students => dispatch(fetchStudentsSuccess(students)))
  .catch((err) => {
    dispatch(fetchStudentsError(err));
  });

};
