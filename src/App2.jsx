import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainContext } from "./contexts/MainContext";
import { useState } from "react";
import Portal from "./Portal";

const App2 = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <BrowserRouter>
        <div>
            <MainContext.Provider value={{showMenu, setShowMenu}}>
            <div>
                <Sidebar />
                <Content />
            </div>
            </MainContext.Provider>
        </div>
        </BrowserRouter>
    )
}

export default App2;