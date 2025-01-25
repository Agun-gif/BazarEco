import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar.jsx';
import MainNavbar from '../components/MainNavbar.jsx';
import Footer from '../components/Footer.jsx';





const MainLayout = () => {
    return (
        <div>
            <TopBar/>
            <MainNavbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;