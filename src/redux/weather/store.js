import { applyMiddleware, createStore } from "redux";
import weatherReducer from './WeatherReducer'
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga';
import { watchersaga } from "./WeatherSaga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchersaga)

export default store;