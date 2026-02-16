import axios from "axios"
import { receiveWeatherError, receiveWeatherResponse } from "./WeatherAction"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { SEND_WEATHER_REQUEST } from "./WeatherTypes"

const getWeatherRequest=(query) =>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&lang=fa&appid=7508a8905fb3ca3a77e768e08c190ed8`)
}

function* handelGetWeather(action) {
    try{

        const res = yield call(getWeatherRequest, action.payload)
         console.log(res.data)
        yield put(receiveWeatherResponse(res.data))

    }catch(error) {
        yield put(receiveWeatherError('شهر یا کشور مورد نظر یافت نشد!'))
    }
}

export function* watchersaga() {
    yield takeLatest(SEND_WEATHER_REQUEST, handelGetWeather)
}