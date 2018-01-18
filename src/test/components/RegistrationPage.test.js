import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import RegistrationPage from '../../components/RegistrationPage';

describe('RegistrationPage component', () => {

  it('should render without fail', () => {
    shallow(<RegistrationPage />)
  })

});
