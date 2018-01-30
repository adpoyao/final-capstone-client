import * as types from '../actions/actionType';

const initialState = {
  panicStudents: [],
  moodAlertStudents: [],
  panicToggled: false,
  loading: false,
  error: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type){
    case types.FETCH_ALERTS_ERROR:
      return Object.assign({}, state, {
        error: action.err,
      });
    case types.FETCH_ALERTS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_ALERTS_SUCCESS:
      return Object.assign({}, state, {
        panicStudents: [...state.panicStudents, action.alerts],
        loading: false,
        error: false,
        panicToggled: true
      });
    case types.TOGGLE_ALERT_ON:
      return Object.assign({}, state, {
        panicToggled: true,
        dateTime: [],
        error: false,
      });
    case types.TOGGLE_ALERT_OFF:
      return Object.assign({}, state, {
        panicToggled: false,
        error: false,
      });
    case types.DISMISS_ALERT:
      return Object.assign({}, state, {
        panicToggled: false,
        error: false,
      });
    case types.FETCH_MOOD_ALERTS_BY_TEACHER:
      return Object.assign({}, state, {
        students: [],
        dateTime: [],
        error: false,
      });
    case types.FETCH_ALERTS_BY_STUDENT_SUCCESS:
      return Object.assign({}, state, {
        panicToggled: true,
        dateTime: [],
        error: false,
      });
    case types.FETCH_UNTOGGLE_ALERTS_SUCCESS:
      return Object.assign({}, state, {
        panicStudents: [],
        error: false,
        loading: false
      });
    default: break;
  }
  return state;
};

export default alertReducer;
