import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import SearchClass from '../../components/SearchClass';

describe('Features component', () => {

  it('should render without fail', () => {
    shallow(<SearchClass />)
  })

});
