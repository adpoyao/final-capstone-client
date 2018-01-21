import React from 'react';
import { shallow } from 'enzyme';
import adapter from '../../setupTests';

import * as actions from '../../actions';
import { Nav } from '../../components/Nav';

describe('Nav component', () => {

  it('should render without fail', () => {
    shallow(<Nav />)
  })

  it('should handle handleChangeView method', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
        <Nav dispatch={dispatch} />
    );
    dispatch.mockClear();
    const instance = wrapper.instance();
    instance.handleChangeView('landing-page');
    expect(dispatch).toHaveBeenCalledWith(actions.toggleView('landing-page'));

  })
});
