import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/classes';
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

  it('creates FETCH_CLASSES_SUCCESS when fetching classes has been done', () => {
    fetchMock
        .getOnce('http://localhost:3000/api/classes', { body: { classes: ['do something'] },
        headers: { 'content-type': 'application/json' },
      });

    const expectedActions = [
      { type: types.FETCH_CLASSES_REQUEST },
      { classes: { classes: ['do something'] }, type: types.FETCH_CLASSES_SUCCESS },
    ];
    const store = mockStore({ classes: [] });

    return store.dispatch(actions.fetchClasses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
