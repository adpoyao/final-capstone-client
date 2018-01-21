import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import * as types from '../../actions/actionType';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_USERS_REQUEST & FETCH_USERS_SUCCESS when fetchUsers() has been called', () => {
    fetchMock
        .getOnce('http://localhost:3000/api/users', { body: { users: ['do something'] },
        headers: { 'content-type': 'application/json' },
      });

    const expectedActions = [
      { type: types.FETCH_USERS_REQUEST },
      { users: { users: ['do something'] }, type: types.FETCH_USERS_SUCCESS },
    ];
    const store = mockStore({ users: [] });

    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('sync actions', () => {
  it('returns expected type when FETCH_USERS_REQUEST has been called', () => {
    const expectedAction = {
      type: types.FETCH_USERS_REQUEST
    }
    expect (actions.fetchUsersRequest()).toEqual(expectedAction)
  })

  it('returns expected type when FETCH_USERS_SUCCESS has been called', () => {
    const expectedAction = {
      type: types.FETCH_USERS_SUCCESS
    }
    expect (actions.fetchUsersSuccess()).toEqual(expectedAction)
  })

  it('returns expected type when FETCH_USERS_ERROR has been called', () => {
    const expectedAction = {
      type: types.FETCH_USERS_ERROR
    }
    expect (actions.fetchUsersError()).toEqual(expectedAction)
  })
});
