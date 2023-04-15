import React from 'react';

function ProductCard({product:{id,image,brand,title,country}}) {
  return (
    <div>
      {title}
    </div>
  );
}

export default ProductCard;