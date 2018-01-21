import viewsReducer from '../../reducers/views';
import * as actions from '../../actions/students';
import * as types from '../../actions/actionType';

describe('viewReducer', () => {
  it('should return the initial state', () => {
    expect(viewsReducer(undefined, {})).toEqual(
      {
        selectedView: 'landing-page'
      }
    );
  });

  it('should handle toggleView()', () => {
    expect(
      viewsReducer({}, {
        type: types.TOGGLE_VIEW,
        selectedView: 'features',
      })
    ).toEqual(
      {
        selectedView: 'features'
      }
    );
  });

});
