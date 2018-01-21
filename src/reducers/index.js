import { combineReducers } from 'redux';
import classesReducer from './classes';
import studentsReducer from './students';

const rootReducer = combineReducers({
  classes: classesReducer,
  students: studentsReducer
});

export default rootReducer;