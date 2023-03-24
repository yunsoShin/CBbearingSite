import React, { useEffect, useState } from 'react';
import { login,logout, onUserStateChange } from '../Api/firebase';
import CompanyLogo from '../img/CompanyNavLogo.png'
import { Link } from 'react-router-dom';
import User from './User';


export default function Navbar() {
    const[user,setUser] = useState();
    useEffect(()=>{
        onUserStateChange(setUser);
    }, [])

    return (
        <header className='flex justify-between border-b border-gray-300 w-full h-20'>
            <Link to='/'><img className='items-center  hidden sm:block h-12 scale-120 translate-x-3 translate-y-3'  src={CompanyLogo} alt="CompanyLogo" /></Link>
            <nav className='flex items-center gap-8 font-semibold text-xl px-10'> 
                    
                    <Link to='/Brand'>Brand</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/products'>product</Link>
                    {user && <User user={user}></User>}
                    {!user && <button onClick={login}>Login</button>}
                    {user && <button  onClick={logout}>Logout!</button>}
                    
            </nav>
        </header>
    );
}


