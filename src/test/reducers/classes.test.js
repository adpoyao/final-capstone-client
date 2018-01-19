import classesReducer from '../../reducers/classes';
import * as actions from '../../actions/classes';
import * as types from '../../actions/actionType';

describe('classesReducer', () => {
  it('should return the initial state', () => {
    expect(classesReducer(undefined, {})).toEqual(
      {
        classes: [],
        loading: false,
        error: false,
      }
    );
  });

  it('should handle fetchClasses()', () => {
    expect(
      classesReducer(undefined, {
        type: types.FETCH_CLASSES,
        classes: [{ class: 'Run the classes tests' }],
      })
    ).toEqual(
      {
        classes: [{ class: 'Run the classes tests' }],
      }
    );
  });
});
