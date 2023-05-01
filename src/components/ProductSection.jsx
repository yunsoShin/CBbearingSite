import React from 'react';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="border border-gray-200 p-4 md:p-6 rounded-md bg-white">
      <img
        className="w-full h-48 md:h-56 object-cover object-center mb-4 md:mb-6 rounded-md"
        src={image}
        alt={title}
      />
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      title: 'Product 1',
      description: 'Product 1 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 2',
      description: 'Product 2 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 3',
      description: 'Product 3 description',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 my-12 bg-gray-100 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">제품소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
