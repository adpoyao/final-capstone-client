import { combineReducers } from 'redux';
import classesReducers from './classes';

const rootReducer = combineReducers({
  classes: classesReducer
});

export default rootReducer;