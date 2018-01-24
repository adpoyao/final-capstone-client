import * as types from '../actions/actionType';

const initialState = {
  students: [],
  loading: false,
  error: false,
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type){
    case types.FETCH_STUDENTS_SUCCESS:
      return Object.assign({}, state, {
        students: action.students,
        loading: false,
        error: false,
      });
    case types.FETCH_STUDENTS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_STUDENTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.err,
      });
    case types.FETCH_STUDENT_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        student: action.student,
        loading: false,
        error: false,
      });
    case types.FETCH_STUDENT_DETAIL_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_STUDENT_DETAIL_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.err,
      });
  }
  return state;
};

export default studentsReducer;
