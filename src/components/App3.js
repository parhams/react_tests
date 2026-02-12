import { Provider } from "react-redux";
import Weather from "./Weather";
import store from "../redux/weather/store";

const App3 = () => {
    return (
        <Provider store={store}>
            <div>
                <Weather />
            </div>
        </Provider>    
    )
}

export default App3;