import React from 'react';

export default function Button({text,onClick}) {
    return (
        <button className='' onClick={onClick}>
            {text}
         </button>
    );
}

