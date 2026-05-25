import React from 'react';
import './ProductCard.css';

function ProductCard({ image, name, description, price, showButton = false, onAddToCart }) {
  return (
    <div className="nn-product-card card h-100 border-0">
      {console.log(image)}
      <img
        src={image}
        className="card-img-top nn-product-card__img"
        alt={name}
      />
      <div className="card-body d-flex flex-column text-center p-3">
        <h3 className="nn-product-card__title">{name}</h3>
        <p className="card-text nn-product-card__desc flex-grow-1">{description}</p>
        <span className="nn-product-card__price d-block mb-2">${price}</span>
        {showButton && (
          <button
            className="btn-brand-sm align-self-center"
            onClick={() => onAddToCart && onAddToCart(name)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
