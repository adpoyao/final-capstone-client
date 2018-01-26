import * as types from './actionType';
import { normalizeResponseErrors } from './utils';

//----- SYNC ACTIONS -----//

// Request all alerts
export const fetchAlertsRequest = () => ({
  type: types.FETCH_ALERTS_REQUEST,
});

// Request Student Alerts
export const fetchAlertsByStudentRequest = () => ({
  type: types.FETCH_ALERTS_BY_STUDENT_REQUEST,
});

// Request Teacher Alerts
export const fetchAlertsByTeacherRequest = () => ({
  type: types.FETCH_ALERTS_BY_TEACHER_REQUEST,
});

// All Alerts Successfully Retrieved
export const fetchAlertsSuccess = (alerts) => ({
  type: types.FETCH_ALERTS_SUCCESS,
  alerts,
});

// Student Alerts Successfully Retrieved
export const fetchAlertsByStudentSuccess = (alerts) => ({
  type: types.FETCH_ALERTS_BY_STUDENT_SUCCESS,
  alerts,
});

// Teacher Alerts Successfully Retrieved
export const fetchAlertsByTeacherSuccess = (alerts) => ({
  type: types.FETCH_ALERTS_BY_TEACHER_SUCCESS,
  alerts,
});

// UNIVERSAL: Toggle Error
export const fetchAlertsError = (err) => ({
  type: types.FETCH_ALERTS_ERROR,
  err,
});

export const fetchUntoggleAlertsSuccess = () => ({
  type: types.FETCH_UNTOGGLE_ALERTS_SUCCESS,
});

//----- STUDENT: ASYNC ACTIONS  -----//

// STUDENT: toggle panic alert on
export const toggleAlertOn = (studentID) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch('http://localhost:8080/api/alert/panic/on', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify(studentID),
      })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(fetchAlertsByStudentSuccess(studentID.panicID)))
    .then(() => dispatch(fetchAlertsSuccess()))
    .catch((err) => {
      dispatch(fetchAlertsError(err));
    });
};

// STUDENT: toggle panic alert off
export const toggleAlertOff = (panicID) => (dispatch, getState) => {
  return fetch(`http://localhost:8080/api/alert/panic/off`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify(panicID),
      })
     .then(res => normalizeResponseErrors(res))
     .then(res => res.json())
     .then(classes => dispatch(fetchUntoggleAlertsSuccess()))
     .catch((err) => {
      dispatch(fetchAlertsError(err));
    });
};

//----- TEACHER: ASYNC ACTIONS  -----//

// TEACHER: Retrieves all critical emotion alerts attached to teacher ID
export const fetchMoodAlertsByTeacher = teacherID => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/mood/${teacherID}`)
  .then(res => res.json())
  .then(alerts => dispatch(fetchAlertsSuccess(alerts)))
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
};

// TEACHER: Retrieves all panic alerts attached to teacher ID
export const fetchPanicAlertsByTeacher = teacherID => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/panic/${teacherID}`)
  .then(res => res.json())
  .then(alerts => dispatch(fetchAlertsSuccess(alerts)))
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
};

// TEACHER: Retrieves all critical moods of a student
export const fetchCriticalMoodsByStudent = studentID => (dispatch, getState) => {
  dispatch(fetchAlertsByStudentRequest());
  return fetch(`http://localhost:8080/api/alert/panic/${studentID}`)
  .then(res => res.json())
  .then(alerts => dispatch(fetchAlertsSuccess(alerts)))
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
};

// TEACHER: Dismisses a panic alert
export const dismissAlert = (data) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch('http://localhost:8080/api/alert/panic/dismiss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify(data),
      })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => dispatch(fetchPanicAlertsByTeacher(res)))
    .catch((err) => {
      dispatch(fetchAlertsError(err));
    });
};
