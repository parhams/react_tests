import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger)), thunk);

export default store;