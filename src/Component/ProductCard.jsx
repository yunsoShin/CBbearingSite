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
        {user && user.isAdmin && <button onClick={()=> 
          window.confirm("삭제하시겠습니까?") ? handleDelete(product.id)
          .then(window.alert("삭제완료하였습니다"))
          .catch(window.alert("다시시도해 주세요")) : false }>삭제하기</button>}
      </div>
      
    </li>
  );
}

export default ProductCard;