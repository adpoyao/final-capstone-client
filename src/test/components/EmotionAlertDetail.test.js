import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import EmotionAlertDetail from '../../components/EmotionAlertDetail';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<EmotionAlertDetail />)
  })

});
