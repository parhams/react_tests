import { Provider } from "react-redux";
import store from "../redux/user/store";
import UserComponent from './UserComponent';

const App = () => {
    return (
        
        <Provider store={store}>
            <div>
                <UserComponent />
            </div>
        </Provider>
    )
}

export default App;