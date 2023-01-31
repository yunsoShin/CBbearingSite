import React, { useCallback, useState } from 'react';
import { Outhlogin,Outhlogout,onUserStateChange } from '../Api/OuthAPI';
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
            {!user && <button onClick={Handlelogin}>login</button>}
            {user && <button onClick={Handlelogout}>logout</button>}

        </header>
    );
}

