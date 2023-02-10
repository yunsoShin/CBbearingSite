import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

export default function root() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

