import { Provider } from "react-redux";
import MyStore from "./MyStore"
import store from "./store";

const App = () => {
    return (
        
        <Provider store={store}>
            <div>
                <MyStore />
            </div>
        </Provider>
        
    )
}

export default App;