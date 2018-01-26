import * as types from '../actions/actionType';

const initialState = {
  panicAlerts: [],
  moodAlerts: [],
  panicToggled: false,
  loading: false,
  error: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type){
    case types.FETCH_ALERTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.err,
      });
    case types.FETCH_ALERTS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_ALERTS_SUCCESS:
      return Object.assign({}, state, {
        alerts: action.alerts,
        loading: false,
        error: false,
      });
    case types.FETCH_ALERTS_BY_STUDENT_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_ALERTS_BY_TEACHER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_ALERTS_BY_STUDENT_SUCCESS:
      return Object.assign({}, state, {
        panicAlerts: action.alerts,
        loading: false,
        error: false,
      });
    case types.FETCH_ALERTS_BY_TEACHER_SUCCESS:
      return Object.assign({}, state, {
        alerts: action.alerts,
        loading: false,
        error: false,
      });
    case types.FETCH_UNTOGGLE_ALERTS_SUCCESS:
      return Object.assign({}, state, {
        panicToggled: false,
        loading: false,
        error: false,
      });
  }
  return state;
};

export default alertReducer;
