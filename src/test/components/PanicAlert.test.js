import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import PanicAlert from '../../components/PanicAlert';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<PanicAlert />)
  })

});
