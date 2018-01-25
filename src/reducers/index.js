import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import classesReducer from './classes';
import viewReducer from './views';
import authReducer from './auth';
import protectedDataReducer from './protected-data';
import moodsReducer from './moods';

const rootReducer = combineReducers({
  classes: classesReducer,
  form: formReducer,
  moods: moodsReducer,
  view: viewReducer,
  auth: authReducer,
  protectedData: protectedDataReducer
});

export default rootReducer;