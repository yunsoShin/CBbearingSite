import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import Button from './ui/Button';

export default function ProductList() {
  const ITEMS_PER_PAGE = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => goToPage(i)}
          text={i}
          disabled={i === currentPage}
        />,
      );
    }
    return pageNumbers;
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-1  gap-4 p-4 w-full'>
        {products &&
          products.slice(startIndex, endIndex).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
      <Button onClick={goToPreviousPage} disabled={currentPage === 1} text={'이전 페이지'} />
      {renderPageNumbers()}
      <Button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        text={'다음 페이지'}
      />
    </>
  );
}
