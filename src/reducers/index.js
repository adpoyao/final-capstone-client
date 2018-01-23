import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import classesReducer from './classes';
import studentsReducer from './students';
import viewReducer from './views';
import authReducer from './auth';
import protectedDataReducer from './protected-data';

const rootReducer = combineReducers({
  classes: classesReducer,
  form: formReducer,
  students: studentsReducer,
  view: viewReducer,
  auth: authReducer,
  protectedData: protectedDataReducer
});

export default rootReducer;