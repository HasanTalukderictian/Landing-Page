import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../routes/pages/shared/Footer/Footer';
import Navbar from '../routes/pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;