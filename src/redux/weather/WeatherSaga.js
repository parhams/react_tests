import axios from "axios"
import { receiveWeatherError, receiveWeatherResponse } from "./Weatheraction"
import { call, put, takeEvery } from "redux-saga/effects"
import { SEND_WEATHER_REQUEST } from "./WeatherTypes"

const getWeatherRequest=(query= "tehran") =>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metrics&appid=7508a8905fb3ca3a77e768e08c190ed8`)
}

function* handelGetWeather(action) {
    try{

        const res = yield call(getWeatherRequest, action.payload)
        yield put(receiveWeatherResponse(res.data))

    }catch(error) {
        yield put(receiveWeatherError(error.message))
    }
}

export function* watchersaga() {
    yield takeEvery(SEND_WEATHER_REQUEST, handelGetWeather)
}