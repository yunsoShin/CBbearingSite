import React from 'react';

function ProductCard({product:{id,image,brand,title,country}}) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p className='mt-2 px-2'>{brand}</p>
        <p>{country}</p>
      </div>
      
    </li>
  );
}

export default ProductCard;