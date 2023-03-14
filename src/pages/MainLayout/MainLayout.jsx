import React from "react"
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./MainLayout.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
    return (<div className="main-content">
        <SideMenu />
        <div style={{ width: "85%", float: "left" }}>
            <Outlet />
            <ToastContainer position='bottom-right' />
        </div>
    </div>);
}

export default MainLayout;