import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../Api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
    const {isLoading, error, data:products}=useQuery(['products'],getProducts);

    return (
        <>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        <ul>
            {products&&products.map((products) => (<ProductCard key={products.id} product={products} />))}
        </ul>
        </>
    );
}

