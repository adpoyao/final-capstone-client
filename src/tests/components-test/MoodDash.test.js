import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import MoodDash from '../../components/MoodDash';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<MoodDash />)
  })

});
