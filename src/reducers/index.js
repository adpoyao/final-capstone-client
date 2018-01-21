import { combineReducers } from 'redux';
<<<<<<< HEAD
import classesReducer from './classes';
import studentsReducer from './students';
import viewReducer from './views';

const rootReducer = combineReducers({
  classes: classesReducer,
  students: studentsReducer,
  view: viewReducer,
=======
import classesReducers from './classes';

const rootReducer = combineReducers({
  classes: classesReducer
>>>>>>> 079ea61502586e9280f58b3e5d167b69db342252
});

export default rootReducer;