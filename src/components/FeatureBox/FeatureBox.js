import React from 'react';
import './FeatureBox.css';

const features = [
  { icon: '🌿', title: '100% Natural',   desc: 'No added sugar, no preservatives, no artificial colors.' },
  { icon: '🏡', title: 'Locally Made',   desc: 'Supporting local farmers and producers in every jar.' },
  { icon: '💪', title: 'Healthy Living', desc: 'Packed with nutrition to help you feel your best every day.' },
];

function FeatureBox() {
  return (
    <section className="nn-features py-5">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="row g-4 justify-content-center">
          {features.map((f, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <div className="nn-feature-card h-100 text-center p-4">
                <div className="nn-feature-card__icon mb-3">{f.icon}</div>
                <h3 className="nn-feature-card__title">{f.title}</h3>
                <p className="nn-feature-card__desc mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
