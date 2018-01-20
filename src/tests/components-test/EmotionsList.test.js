import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import EmotionsList from '../../components/EmotionsList';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<EmotionsList />)
  })

});
