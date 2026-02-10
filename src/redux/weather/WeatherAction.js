import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./WeatherTypes"

export const  sendWeatherRequest=(query) =>{
    return {
        type: SEND_WEATHER_REQUEST,
        payload:query
    }
}

export const receiveWeatherResponse=(data) =>{
    return{
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }
}

export const receiveWeatherError=(error) =>{
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload:error
    }
}