import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../setupTests';

import Nav from '../components/Nav';

describe('Nav component', () => {

  it('should render without fail', () => {
    shallow(<Nav />)
  })

});