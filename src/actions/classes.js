import * as types from './actionType';

export const fetchClassesSuccess = (classes, enrolledClasses) => ({
  type: types.FETCH_CLASSES_SUCCESS,
  classes,
  enrolledClasses,
});

export const fetchClassesRequest = () => ({
  type: types.FETCH_CLASSES_REQUEST,
});

export const fetchClassesError = (err) => ({
  type: types.FETCH_CLASSES_ERROR,
  err,
});

export const createClass = () => ({
  type: types.CREATE_CLASS,
});

export const enrollStudent = (classID) => ({
  type: types.ENROLL_STUDENT,
  classID,
})

// Retrieve all classes students searched for by TeacherName
export const fetchClasses = teacherName => (dispatch, getState) => {
  dispatch(fetchClassesRequest());
  return fetch(`http://localhost:3000/api/classes/search/${teacherName}`)
  .then(res => res.json())
  .then(classes => dispatch(fetchClassesSuccess(classes)))
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
  .then(classes => dispatch(fetchClassesSuccess(classes)))
  .catch((err) => {
    dispatch(fetchClassesError(err));
  });
};

//Creates a new class by a teacher
export const createNewClass = (className, teacherID, teacherName) => (dispatch, getState) => {
  return fetch('http://localhost:3000/api/classes/teacher/create'), {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
          },
        body: JSON.stringify(className, teacherID, teacherName),
      }
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(newClass => dispatch(createClass(newClass)))
    .catch((err) => {
      dispatch(fetchClassesError(err));
    });
};

//Student enrolls to an existing class
export const enrollExistingClass = (classID, studentID, studentName) => (dispatch, getState) => {
  return fetch(`http://localhost:3000/api/classes/student/enroll`), {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
          },
        body: JSON.stringify(classID, studentID, studentName),
      }
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(existingClass => dispatch(enrollStudent(classID)))
    .catch((err) => {
      dispatch(fetchClassesError(err));
    });
};
