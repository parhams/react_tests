import axios from "axios"
import { USER_GET_RESPONSE, USER_SEND_REQUEST } from "./userTypes"

export const sendUserReuest = ()=> {
    return {
        type: USER_SEND_REQUEST
    }
}

export const getUserResponse = (data)=> {
    return {
        type: USER_GET_RESPONSE,
        payload: data
    }
}

export const getUserError = (error)=> {
    return {
        type: USER_GET_RESPONSE,
        payload: error
    }
}

export const getUsers = () => {
    return (dispatch) => {
        dispatch(sendUserReuest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {
            console.log(res.data)
           res.data.constructor === Array ? dispatch(getUserResponse(res.data)) : dispatch(getUserError('خطای دریافت لیست کاربران'))
        }).catch(error=> {
            dispatch(getUserError(error.message));
        })
    }
}