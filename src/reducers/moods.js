import * as types from '../actions/actionType';

const initialState = {
    selectedMood: '',
    studentMoods: '',
    loading: false,
    error: false
}
const moodsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.UPDATE_MOOD_CAPTION:
            return Object.assign({}, state, {
                selectedMood: action.mood
            })
<<<<<<< HEAD
        case types.FETCH_MOOD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: false
            })
        case types.FETCH_MOOD_SUCCESS:
            return Object.assign({}, state, {
                studentMoods: action.mood
            })
        case types.FETCH_MOOD_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: true
            })
=======
        default: break;
>>>>>>> master
    }
    return state;
}
export default moodsReducer;