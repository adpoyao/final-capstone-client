import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import DashboardStudent from '../../components/Dashboard-Student';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<DashboardStudent />)
  })

});
