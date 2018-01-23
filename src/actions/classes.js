import * as types from './actionType';
import { normalizeResponseErrors } from './utils';

export const fetchClassesSuccess = (searchedClasses) => ({
  type: types.FETCH_CLASSES_SUCCESS,
  searchedClasses,
});

export const fetchClassesRequest = () => ({
  type: types.FETCH_CLASSES_REQUEST,
});

export const fetchClassesError = (err) => ({
  type: types.FETCH_CLASSES_ERROR,
  err,
});

export const createClass = (createdClasses) => ({
  type: types.CREATE_CLASS,
  createdClasses,
});

export const enrollStudent = (enrolledClasses) => ({
  type: types.ENROLL_STUDENT,
  enrolledClasses,
});

// STUDENT: Retrieve all classes students searched for by TeacherName
export const fetchClasses = teacherName => (dispatch, getState) => {
  dispatch(fetchClassesRequest());
  return fetch(`http://localhost:3000/api/classes/search/${teacherName}`)
  .then(res => res.json())
  .then(searchedClasses => dispatch(fetchClassesSuccess(searchedClasses)))
  .catch((err) => {
    dispatch(fetchClassesError(err));
  });
};

// Retrieve all classes a student is enrolled in
export const fetchEnrolledClasses = studentID => (dispatch, getState) => {
  dispatch(fetchClassesRequest());
  return fetch(`http://localhost:3000/api/classes/student/${studentID}`)
  .then(res => res.json())
  .then(enrolledClasses => dispatch(fetchClassesSuccess(enrolledClasses)))
  .catch((err) => {
    dispatch(fetchClassesError(err));
  });
};

// Retrieves all classes a teacher has created
export const fetchClassesByTeacher = teacherID => (dispatch, getState) => {
  dispatch(fetchClassesRequest());
  return fetch(`http://localhost:3000/api/classes/teacher/${teacherID}`)
  .then(res => res.json())
  .then(searchedClasses => dispatch(fetchClassesSuccess(searchedClasses)))
  .catch((err) => {
    dispatch(fetchClassesError(err));
  });
};

//Creates a new class by a teacher
export const createNewClass = (data) => (dispatch, getState) => {
  return fetch('http://localhost:3000/api/classes/teacher/create'), {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
          },
        body: JSON.stringify(data),
      }
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(createdClasses => dispatch(createClass(createdClasses)))
    .catch((err) => {
      dispatch(fetchClassesError(err));
    });
};

//Student enrolls to an existing class
export const enrollExistingClass = (data) => (dispatch, getState) => {
  return fetch(`http://localhost:3000/api/classes/student/enroll`), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
          },
        body: JSON.stringify(data),
      }
     .then(res => normalizeResponseErrors(res))
     .then(res => res.json())
     .then(enrolledClasses => dispatch(enrollStudent(enrolledClasses)))
     .catch((err) => {
      dispatch(fetchClassesError(err));
    });
};
