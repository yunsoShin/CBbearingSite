import React, { useEffect, useState } from 'react';
import { login,logout, onUserStateChange } from '../Api/firebase';
import CompanyLogo from '../img/CompanyNavLogo.png'
import { Link } from 'react-router-dom';


export default function Navbar() {
    const[user,setUser] = useState();
    useEffect(()=>{
        onUserStateChange((user)=>{
            console.log(user);
            setUser(user);
        });
    }, [])
    const handlelogin = ()=>{
        login().then(user=>setUser);
    }
    const handlelogout = ()=>{
        logout().then(user=>setUser);
    }
    

    return (
        <header className='flex justify-between border-b border-gray-300 w-full translate-y-[-0.5rem]'>
            <Link to='/'><img className='flex items-center scale-75 translate-x-[-1rem]'  src={CompanyLogo} alt="CompanyLogo" /></Link>
            <nav className='flex items-center gap-8 font-semibold text-xl px-10'>
                    
                    {!user && <button onClick={handlelogin}>Login</button>}
                    {user && <button  onClick={handlelogout}>Logout!</button>}
                    <Link to='/Brand'>Brand</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/products'>product</Link>
            </nav>
        </header>
    );
}


