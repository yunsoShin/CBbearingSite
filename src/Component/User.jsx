import React from 'react';

export default function User({user:{photoURL,displayName}}) {
    return (
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full hidden md:block' src={photoURL} alt={displayName} />
        </div>
    );
}

