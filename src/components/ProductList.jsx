import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function ProductList() {
  const ITEMS_PER_PAGE = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }; //테스트1
  
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-1  gap-4 p-4 w-full'>
        {products &&
     products.slice(startIndex,endIndex).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
      </ul>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        이전 페이지
      </button>
      <button
        onClick={goToNextPage}
      >
        다음 페이지
      </button>
    </>
  );
}
