import { combineReducers } from 'redux';
import classesReducer from './classes';
import studentsReducer from './students';
import viewReducer from './views';

const rootReducer = combineReducers({
  classes: classesReducer,
  students: studentsReducer,
  view: viewReducer,
});

export default rootReducer;