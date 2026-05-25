import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="nn-hero d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7">
            <h2 className="nn-hero__title mb-3">Welcome to NaturaNest</h2>
            <p className="nn-hero__sub mb-4">
              Your trusted source for 100% natural peanut butter and healthy products.
            </p>
            <Link to="/products" className="btn-brand px-4 py-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
