import React, {useEffect, useState } from 'react';
import { Outhlogin,Outhlogout,onUserStateChange } from '../Api/OuthAPI';
import CompanyLogo from '../img/CompanyNavLogo.png'
import { Link } from 'react-router-dom';
import User from './User';
export default function Navbar() {
    const[user,setUser] = useState();
    useEffect(()=>{
        onUserStateChange(setUser)
    },[]);

    return (
        <header className="flex justify-between p-2">
            <nav className='flex justify-between p-0 w-full items-center gap-3 border-b border-gray-300'>
                <Link to='/'><img src={CompanyLogo} alt="CompanyLogo"/></Link>
                <ul className='flex items-center gap-5 font-semibold text-xl pr-5'>
                    <li>{user&&<User user={user}/>}</li>
                    <li>{!user && <button onClick={Outhlogin}>Login</button>}</li>
                    <li>{user && <button  onClick={Outhlogout}>Logout</button>}</li>
                    <li><Link to='/Brand'>Brand</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/products'>product</Link></li>
                </ul>
            </nav>
        </header>
    );
}

