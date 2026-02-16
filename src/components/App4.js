import { Provider } from "react-redux";
import store from "../redux/weather/store";
import LoginForm from "./LoginForm";
import LoginForm1 from "./LoginForm1";

const App4 = () => {
    return (
        <Provider store={store}>
            <div>
                <LoginForm1 />
            </div>
        </Provider>    
    )
}

export default App4;