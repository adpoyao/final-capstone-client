import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import StudentListDetail from '../../components/StudentListDetail';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<StudentListDetail />)
  })

});
