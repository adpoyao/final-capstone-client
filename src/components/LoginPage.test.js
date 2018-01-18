import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../setupTests';

import LoginPage from '../components/LoginPage';

describe('LoginPage component', () => {

  it('should render without fail', () => {
    shallow(<LoginPage />)
  })

});