import * as actions from '../../actions';
import * as types from '../../actions/actionType';

import expect from 'expect';

describe('sync actions', () => {
  it('returns expected type when TOGGLE_VIEW has been called', () => {
    const expectedAction = {
      type: types.TOGGLE_VIEW
    }
    expect (actions.toggleView()).toEqual(expectedAction)
  })

});
