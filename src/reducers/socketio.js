import * as types from '../actions/actionType';

const initialState = {
    username: '',
    message: '',
    messages: [],
    loading: false,
    error: false,
}
const socketioReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.SET_MESSAGES:
            return Object.assign({}, state, {
                messages: [...state.messages, action.message]
            })
          case types.SET_USER_MESSAGES:
            return Object.assign({}, state, {
                message: action.message
            })
          case types.CLEAR_HISTORY:
            return Object.assign({}, state, {
                messages: []
            })
        default: break;
    }
    return state;
}
export default socketioReducer;