import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

function ProductList({ products, showButton = false, onAddToCart }) {
  return (
    <div className="container nn-product-list">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              showButton={showButton}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;