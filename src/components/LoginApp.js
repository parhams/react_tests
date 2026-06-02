import { Provider } from "react-redux";
import store from "../redux/weather/store";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Login from "./Login";

const App4 = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <Register /> */}
                <Login />
            </div>
        </Provider>    
    )
}

export default App4;