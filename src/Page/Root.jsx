import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

export default function root() {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
}

