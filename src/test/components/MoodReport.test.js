import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import MoodReport from '../../components/MoodReport';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<MoodReport />)
  })

});
