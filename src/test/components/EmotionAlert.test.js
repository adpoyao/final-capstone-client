import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import EmotionAlert from '../../components/EmotionAlert';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<EmotionAlert />)
  })

});
