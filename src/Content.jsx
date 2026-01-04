import { useContext, useState } from "react";
import Gallery from "./gallery/Gallery";
import Group from "./group/Group";
import Post from "./post/Post";
import User from "./user/User";
import AddUser from "./user/AddUser";
import Footer from "./user/Footer";
import Work from "./work/Work";
import { MainContext } from "./contexts/MainContext";
import { Navigate, Route, Routes } from "react-router-dom";
import WithAlert2 from "./HOC/WithAlert2";
import Comments from "./post/Comments";

const Content = () => {
    const { showMenu, setShowMenu } = useContext(MainContext);
    const [isUser] = useState(true);

    const handelShowMenu = (e) => {
        e.stopPropagation();
        setShowMenu(prev => !prev);
    };

    const renderUser = (Confirm, Alert)=> <User Confirm={Confirm} Alert={Alert} />

    return (
        <div
            id="content_section"
            className={showMenu ? "with_sidebar" : ""}
            onClick={() => setShowMenu(false)}
        >
            <i
                className="top_navbar mini_menu fas fa-bars text-dark m-2 pointer"
                onClick={handelShowMenu}
            ></i>

            <Routes>
                {/* <Route path="/" element={isUser ? <User /> : <Navigate replace to="/post" />} /> */}
                <Route path="/" element={
                    <WithAlert2>
                        {renderUser}
                    </WithAlert2>
                } />
                <Route path="/user/add" element={<AddUser />}>
                    <Route path=":userId" element={<Footer />} />
                </Route>
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/group" element={<Group />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/comments" element={<Comments />}>
                    <Route path=":postId" element={<Footer />} />
                </Route>
                <Route path="/work" element={<Work />} />
                <Route path="*" element={
                    <WithAlert2>
                        {renderUser}
                    </WithAlert2>
                } />
            </Routes>
        </div>
    );
};

export default Content;