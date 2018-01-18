import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../setupTests';

import Features from '../components/Features';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<Features />)
  })

});