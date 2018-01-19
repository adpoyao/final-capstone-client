import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import DashboardMain from '../../components/DashboardMain';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<DashboardMain />)
  })

});
