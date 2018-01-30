import * as types from './actionType';
import { normalizeResponseErrors } from './utils';

//----- SYNC ACTIONS -----//

// All: Request all alerts
export const fetchAlertsRequest = () => ({
  type: types.FETCH_ALERTS_REQUEST,
});

// Teacher: Panic alerts Successfully Retrieved
export const fetchPanicAlertsSuccess = (alerts) => ({
  type: types.FETCH_PANIC_ALERTS_SUCCESS,
  alerts,
});

// Teacher: Mood alerts Successfully Retrieved
export const fetchMoodAlertsSuccess = (alerts) => ({
  type: types.FETCH_MOOD_ALERTS_SUCCESS,
  alerts,
});

// All: Toggle Error
export const fetchAlertsError = (err) => ({
  type: types.FETCH_ALERTS_ERROR,
  err,
});

// Student: Successfully submits panic
export const submitAlertSuccess = (alert) => ({
  type: types.SUBMIT_ALERT_SUCCESS,
  alert
})

// Student: Toggles Alert Button
export const toggleAlertButton = boolean => ({
  type: types.TOGGLE_ALERT_BUTTON,
  boolean,
})

// Student: Dismisses Panic alert
export const fetchUntoggleAlertsSuccess = () => ({
  type: types.FETCH_UNTOGGLE_ALERTS_SUCCESS,
});

// // Request Student Alerts
// export const fetchAlertsByStudentRequest = () => ({
//   type: types.FETCH_ALERTS_BY_STUDENT_REQUEST,
// });

// // Request Teacher Alerts
// export const fetchAlertsByTeacherRequest = () => ({
//   type: types.FETCH_ALERTS_BY_TEACHER_REQUEST,
// });

// Student Alerts Successfully Retrieved
// export const fetchAlertsByStudentSuccess = (alerts) => ({
//   type: types.FETCH_ALERTS_BY_STUDENT_SUCCESS,
//   alerts,
// });

// // Teacher Alerts Successfully Retrieved
// export const fetchAlertsByTeacherSuccess = (alerts) => ({
//   type: types.FETCH_ALERTS_BY_TEACHER_SUCCESS,
//   alerts,
// });

//----- STUDENT: ASYNC ACTIONS  -----//

// STUDENT: Toggle panic alert on
export const studentAlertTeachers = (data) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch('http://localhost:8080/api/alert/panic/on', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify(data),
      })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((result) => {
      dispatch(fetchAlert(result.studentID, result.alertID))
    })
    .catch((err) => {
      dispatch(fetchAlertsError(err));
    });
};

// // TEACHER: Retrieves all panic alerts attached to studentID
export const fetchAlert = (studentID, alertID) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/${studentID}/${alertID}`)
  .then(res => res.json())
  .then(alerts => {
    dispatch(submitAlertSuccess(alerts))
  })
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
}

// STUDENT: Toggle panic alert off
export const toggleAlertOff = (data) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/panic/off`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify(data),
      })
     .then(res => normalizeResponseErrors(res))
     .then(() => {
      dispatch(fetchUntoggleAlertsSuccess())
     })
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
  .then(alerts => dispatch(fetchMoodAlertsSuccess(alerts)))
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
};

// // TEACHER: Retrieves all panic alerts attached to studentID
export const fetchPanicAlertsByTeacher = teacherID => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/panic/${teacherID}`)
  .then(res => res.json())
  .then(alerts => dispatch(fetchPanicAlertsSuccess(alerts)))
  .catch((err) => {
    dispatch(fetchAlertsError(err));
  });
};

// // TEACHER: Dismisses a panic alert
export const dismissAlert = (panicID, teacherID) => (dispatch, getState) => {
  dispatch(fetchAlertsRequest());
  return fetch(`http://localhost:8080/api/alert/panic/dismiss/${panicID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify({teacherID}),
      })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    //.then((res) => dispatch(fetchPanicAlertsByTeacher(res)))
    .catch((err) => {
      dispatch(fetchAlertsError(err));
    });
};

// // TEACHER: Retrieves all critical moods of a student
// export const fetchCriticalMoodsByStudent = studentID => (dispatch, getState) => {
//   dispatch(fetchAlertsByStudentRequest());
//   return fetch(`http://localhost:8080/api/alert/panic/${studentID}`)
//   .then(res => res.json())
//   .then(alerts => dispatch(fetchAlertsSuccess(alerts)))
//   .catch((err) => {
//     dispatch(fetchAlertsError(err));
//   });
// };