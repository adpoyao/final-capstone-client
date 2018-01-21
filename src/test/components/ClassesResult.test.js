import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import ClassesResult from '../../components/ClassesResult';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<ClassesResult />)
  })

});
