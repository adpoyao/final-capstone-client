import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Conversations from './Conversations'
// import App from './App';
import store from './store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Conversations />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
