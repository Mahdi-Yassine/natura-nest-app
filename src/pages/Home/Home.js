import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import FeatureBox from '../../components/FeatureBox/FeatureBox';
import ProductList from '../../components/ProductList/ProductList';
import products from '../../data/products';
import './Home.css';

const bestSellers = products.slice(0, 3);

function Home() {
  return (
    <div className="nn-home">
      <Hero />
      <FeatureBox />

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Our Best Sellers</h2>
        </div>
        <ProductList products={bestSellers} />
        <div className="text-center mt-4">
          <Link to="/products" className="btn-brand px-4 py-2">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
