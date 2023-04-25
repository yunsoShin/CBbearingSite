import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className=' text-white py-2 px-4 rounded-md hover:brightness-150  bg-slate-800'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
