import usersReducer from '../../reducers/users';
import * as actions from '../../actions/users';
import * as types from '../../actions/actionType';

describe('usersReducer', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(
      {
        users: [],
        loading: false,
        error: undefined,
      }
    );
  });

  it('should handle fetchUsersSuccess()', () => {
    expect(
      usersReducer({}, {
        type: types.FETCH_USERS_SUCCESS,
        users: [{ user: 'Run the users tests' }],
      })
    ).toEqual(
      {
        users: [{ user: 'Run the users tests' }],
        error: false,
        loading: false
      }
    );
  });

  it('should handle fetchClassesError()', () => {
    expect(
      usersReducer({}, {
        type: types.FETCH_USERS_ERROR,
      })
    ).toEqual(
      {
        error: undefined,
        loading: false
      }
    );
  });

  it('should handle fetchClassesRequest()', () => {
    expect(
      usersReducer({}, {
        type: types.FETCH_USERS_REQUEST,
      })
    ).toEqual(
      {
        error: false,
        loading: true
      }
    );
  });
});
