import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import classesReducer from './classes';
import viewReducer from './views';
import authReducer from './auth';
import alertReducer from './alert';
import moodsReducer from './moods';
import studentsReducer from './students';
import protectedDataReducer from './protected-data';


const rootReducer = combineReducers({
  classes: classesReducer,
  form: formReducer,
  moods: moodsReducer,
  yourStudents: studentsReducer,
  view: viewReducer,
  auth: authReducer,
  alert: alertReducer,
  protectedData: protectedDataReducer,
});

export default rootReducer;
