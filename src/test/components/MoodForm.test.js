import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import MoodForm from '../../components/MoodForm';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<MoodForm />)
  })

});
