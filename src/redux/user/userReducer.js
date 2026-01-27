import { USER_GET_ERROR, USER_GET_RESPONSE, USER_SEND_REQUEST } from "./userTypes";

const userInit = {
    loading:false,
    data: [],
    error: ''
}

export const userReducer(state= userInit, action) => {
    switch (action.type) {
        case USER_SEND_REQUEST:
            return {...state, loading: true}
        case USER_GET_RESPONSE:
            return {...state, loading: false, data: action.payload, error: ''}
        case USER_GET_ERROR:
            return {...state, loading: false, data:[], error: action.payload}
        default:
            return state;
    }
}