import * as actions from './Actions';
import { combineReducers } from 'redux';

const INITIAL_USERS_STATE = { self: { name: '', id: '' }, list: [] }
const INITIAL_MESSAGES_STATE = { list: [] }

function usersReducer(state = INITIAL_USERS_STATE, action) {
    switch (action.type) {
        case actions.SET_SELF:
            return { ...state, self: { name: action.name, id: action.id } }
        case actions.SET_USERS:
            return { ...state, list: action.list };
        case actions.REMOVE_USER:
            return { ...state, list: state.list.filter(user => user.name !== action.name) }
        default:
            return state;
    }
}

function messagesReducer(state = INITIAL_MESSAGES_STATE, action) {
    switch (action.type) {
        case actions.ADD_MESSAGES:
            return { list: [...state.list, action.message] }
        case actions.DELETE_MESSAGES:
            return INITIAL_MESSAGES_STATE;
        default:
            return state;
    }
}

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer
});