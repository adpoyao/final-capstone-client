import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import ClassesMain from '../../components/ClassesMain';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<ClassesMain />)
  })

});
