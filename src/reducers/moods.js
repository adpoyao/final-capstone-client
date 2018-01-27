import * as types from '../actions/actionType';

const initialState = {
    selectedMood: ''
}
const moodsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.UPDATE_MOOD_CAPTION:
            return Object.assign({}, state, {
                selectedMood: action.mood
            })
        default: break;
    }
    return state;
}
export default moodsReducer;