import React from 'react';
import './PageBanner.css';

function PageBanner({ title, subtitle }) {
  return (
    <section className="nn-page-banner py-5">
      <div className="container text-center">
        <h2 className="nn-page-banner__title mb-2">{title}</h2>
        {subtitle && <p className="nn-page-banner__sub mb-0">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
