import React from 'react';

export default function Button({text,onClick}) {
    return (
        <button className='border border-black w-1/2 hover:bg-black hover:text-white p-1 px-3' onClick={onClick}>
            {text}
         </button>
    );
}

