import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './local-storage';
import * as actions from './actions'


import rootReducer from './reducers';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(actions.setAuthToken(token));
    store.dispatch(actions.refreshAuthToken());
}

export default store;