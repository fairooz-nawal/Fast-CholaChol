import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const HomeLayout = () => {
    return (
        <div className='max-w-full md:max-w-8xl lg:max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;