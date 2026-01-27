import store from "../redux/user/store";

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