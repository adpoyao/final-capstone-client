import * as types from '../actions/actionType';

const initialState = {
  createdClasses: [],
  enrolledClasses: [],
  searchedClasses: [],
  loading: false,
  error: false,
};

const classesReducer = (state = initialState, action) => {
  switch (action.type){
    case types.FETCH_CLASSES_SUCCESS:
      return Object.assign({}, state, {
        searchedClasses: action.searchedClasses,
        loading: false,
        error: false,
      });
    case types.FETCH_CLASSES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.FETCH_CLASSES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.err,
      });
    case types.CREATE_CLASS:
      return Object.assign({}, state, {
        createdClasses: action.createdClasses,
        loading: false,
        error: false,
      });
    case types.ENROLL_STUDENT:
      return Object.assign({}, state, {
        enrolledClasses: action.enrolledClasses,
        loading: false,
        error: false,
      });
  }
  return state;
};

export default classesReducer;
