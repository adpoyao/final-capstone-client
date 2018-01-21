import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import classesReducer from './classes';
import studentsReducer from './students';
import viewReducer from './views';

const rootReducer = combineReducers({
  classes: classesReducer,
  form: formReducer,
  students: studentsReducer,
  view: viewReducer,
});

export default rootReducer;