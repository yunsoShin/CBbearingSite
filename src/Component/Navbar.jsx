import React, {useEffect, useState } from 'react';
import { login } from '../Api/firebase';
import CompanyLogo from '../img/CompanyNavLogo.png'
import { Link } from 'react-router-dom';
import User from './User';

export default function Navbar() {
    const[user,setUser] = useState();
    /*useEffect(() => {
        onUserStateChange(setUser);
      }, []);
    */

    return (
        <header className='flex justify-between border-b border-gray-300 w-full translate-y-[-0.5rem]'>
            <Link to='/'><img className='flex items-center scale-75 translate-x-[-1rem]'  src={CompanyLogo} alt="CompanyLogo" /></Link>
            <nav className='flex items-center gap-8 font-semibold text-xl px-10'>
                    {user&&<User user={user}/>}
                    {!user && <button onClick={login}>Login</button>}
                    
                    <Link to='/Brand'>Brand</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/products'>product</Link>
            </nav>
        </header>
    );
}
/*{user && <button  onClick={Outhlogout}>Logout</button>}*/

