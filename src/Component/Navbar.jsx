import React, { useEffect, useState } from 'react';
import { login,logout, onUserStateChange } from '../Api/firebase';
import CompanyLogo from '../img/CompanyNavLogo.png'
import smCompanyLogo from '../img/smCompanyNavLogo.png'
import { Link } from 'react-router-dom';
import User from './User';
import Button from './Button';
import { useAuthContext } from './context/AuthContext';



export default function Navbar() {
    const {user,login,logout} = useAuthContext(); 
    return (
        <header className='flex justify-between border-b border-gray-300 w-full h-20'>
            <Link to='/'><img className="items-center  hidden sm:block h-12 max-w-full w-auto scale-110 translate-x-3 translate-y-3"  src={CompanyLogo} alt="CompanyLogo" /></Link>
            <Link to='/'><img className="items-center  sm:hidden block h-12 max-w-full w-auto scale-110 translate-x-3 translate-y-3"  src={smCompanyLogo} alt="CompanyLogo" /></Link>
            <nav className='flex items-center gap-8 font-semibold text-xl px-10'>
                    
                    <Link to='/Brand'>Brand</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/products'>product</Link>
                    {user && <User user={user}></User>}
                    {!user && <Button text={'Login'} onClick={login} />}
                    {user && <Button  text={'logout'} onClick={logout} />}
                    
            </nav>
        </header>
    );
}


