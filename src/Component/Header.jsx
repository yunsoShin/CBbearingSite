import React, { useCallback, useState } from 'react';
import { Outhlogin,Outhlogout,onUserStateChange } from '../Api/OuthAPI';
import CompanyLogo from '../img/CompanyNavLogo.png'
import { Link } from 'react-router-dom';
export default function Header() {

    const[user,setUser] = useState()

    useCallback(()=>{
        onUserStateChange((user)=>{
            console.log(user);
            setUser(user);
        });
    }, []);
    const Handlelogin = () => {
        Outhlogin().then(setUser);
    }
    const Handlelogout = () => {
        Outhlogout().then(setUser);
    }

    return (

        <header>
            
            <nav className='flex justify-between p-0 w-full items-center'>
                <Link to='/'><img className='m-0 p-0' src={CompanyLogo} alt="CompanyLogo"/></Link>
                <ul className='flex px-10'>
                    <li className='px-3 text-2xl'>{!user && <button onClick={Handlelogin}>login</button>}</li>
                    <li className='px-3 text-2xl'>{user && <button  onClick={Handlelogout}>logout</button>}</li>
                    <li className='px-3 text-2xl'><Link to='/Brand'>Brand</Link></li>
                    <li className='px-3 text-2xl'><Link to='/Contact'>Contact</Link></li>
                    <li className='px-2 text-2xl'><Link to='/products'>product</Link></li>
                </ul>
            </nav>
        </header>
    );
}

