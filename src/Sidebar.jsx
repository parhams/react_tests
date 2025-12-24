import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext)

    return (
        <div id="sidebar_section" className={`${!showMenu ? "collapsed" : ""}`}>
            <div className={`mini_sidebar ${showMenu ? "expanded" : "collapsedd"} mt-3`}>

                <div className="siebar_items avatar_li">
                    <div className="avatar_box">
                        <img className="avatar_img" src="./assets/images/samani.jpg" alt="" />
                    </div>
                </div>
                <div className="siebar_items">
                    <div className="icon">
                        <i className="fas fa-home text-white"></i>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "hiddenable ms-2" : "ms-2"} to="/">
                        کاربران
                    </NavLink>
                </div>
                <div className="siebar_items">
                    <div className="icon">
                        <i className="fas fa-images text-white"></i>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "hiddenable ms-2" : "ms-2"} to="/gallery">
                        گالری ها
                    </NavLink>
                </div>
                <div className="siebar_items">
                    <div className="icon">
                        <i className="fas fa-share text-white"></i>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "hiddenable ms-2" : "ms-2"} to="/post">
                        پست ها
                    </NavLink>
                </div>
                <div className="siebar_items">
                    <div className="icon">
                        <i className="fas fa-gear text-white"></i>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "hiddenable ms-2" : "ms-2"} to="/work">
                        کارها
                    </NavLink>
                </div>
                <div className="siebar_items">
                    <div className="icon">
                        <i className="fas fa-users text-white"></i>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "hiddenable ms-2" : "ms-2"} to="/group">
                        گروه ها
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;