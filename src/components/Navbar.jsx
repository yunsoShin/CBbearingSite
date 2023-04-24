import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CompanyLogo from '../img/CompanyNavLogo.png'

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' >
        <img className="items-center  hidden md:block h-12  scale-110 translate-x-3"  src={CompanyLogo} alt="CompanyLogo" />
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/questions'>Q&A</Link>
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
