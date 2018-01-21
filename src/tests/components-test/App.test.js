import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../../App';
import Nav from '../../components/Nav';
import Features from '../../components/Features';

import {Provider} from 'react-redux';
import store from '../../store';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render <Nav /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Nav).length).toBe(1);
  });

  // TODO: Find out how to test Link components
});
