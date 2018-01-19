import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import MoodCloud from '../../components/MoodCloud';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<MoodCloud />)
  })

});
