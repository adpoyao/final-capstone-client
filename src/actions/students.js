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

export const fetchStudentDetailSuccess = (student) => ({
  type: types.FETCH_STUDENT_DETAIL_SUCCESS,
  student,
})

export const fetchStudentDetailRequest = () => ({
  type: types.FETCH_STUDENT_DETAIL_REQUEST,
});

export const fetchStudentDetailError = (err) => ({
  type: types.FETCH_STUDENT_DETAIL_ERROR,
  err,
});


// Retrieves all enrolled students of a teacher
export const fetchStudents = teacherID => (dispatch, getState) => {
  dispatch(fetchStudentsRequest());
  return fetch(`http://localhost:8080/api/students/${teacherID}`)
  .then(res => res.json())
  .then(students => dispatch(fetchStudentsSuccess(students)))
  .catch((err) => {
    dispatch(fetchStudentsError(err));
  });
};

// Retrieves detail of student and mood
export const fetchStudentDetail = studentID => (dispatch, getState) => {
  dispatch(fetchStudentDetailRequest());
  return fetch(`http://localhost:8080/api/students/detail/${studentID}`)
  .then(res => res.json())
  .then(students => dispatch(fetchStudentDetailSuccess(students)))
  .catch((err) => {
    dispatch(fetchStudentDetailError(err));
  });
};