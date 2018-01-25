import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import classesReducer from './classes';
import viewReducer from './views';
import authReducer from './auth';
import protectedDataReducer from './protected-data';
import alertReducer from './alert';

const rootReducer = combineReducers({
  classes: classesReducer,
  form: formReducer,
  view: viewReducer,
  auth: authReducer,
  alert: alertReducer,
  protectedData: protectedDataReducer,
});

export default rootReducer;
