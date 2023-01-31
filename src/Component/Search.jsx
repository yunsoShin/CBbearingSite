import React from 'react';
import { Navigate } from 'react-router';


export default function Search() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        Navigate(``)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} ></form>
        </div>
    );
}

