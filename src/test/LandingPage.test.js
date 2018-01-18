import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../setupTests';

import LandingPage from '../components/LandingPage';

describe('LandingPage component', () => {

  it('should render without fail', () => {
    shallow(<LandingPage />)
  })

});