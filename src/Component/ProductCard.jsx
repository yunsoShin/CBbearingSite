import React from 'react';
import { handleDelete } from '../Api/firebase';
import { useAuthContext } from './context/AuthContext';

function ProductCard({
  product,
  product:{id,image,brand,title,country}}) {
  const {user} = useAuthContext();
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p className='mt-2 px-2'>{brand}</p>
        <p>{country}</p>
        {user && user.isAdmin && <button onClick={()=> handleDelete(product.id)}>삭제하기</button>}
      </div>
      
    </li>
  );
}

export default ProductCard;