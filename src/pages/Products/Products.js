import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import FilterBar from '../../components/FilterBar/FilterBar';
import ProductList from '../../components/ProductList/ProductList';
import products from '../../data/products';
import './Products.css';

function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter(p => p.category === activeFilter);

  const handleAddToCart = (name) => {
    alert(`"${name}" added to cart!`);
  };

  return (
    <div className="nn-products-page pb-5">
      <PageBanner
        title="Our Products"
        subtitle="Explore our full range of natural and healthy products."
      />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProductList products={filtered} showButton onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Products;
