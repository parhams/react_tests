import { applyMiddleware, createStore } from "redux";
import rootReducer from './food/rootReducer'
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run()

export default store;