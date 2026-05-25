import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import TeamCard from '../../components/TeamCard/TeamCard';
import './About.css';

import team1 from '../../assets/Team1.jpg';
import team2 from '../../assets/Team2.jpg';
import team3 from '../../assets/Team3.jpg';
import aboutImage from '../../assets/about.jpg';

const teamMembers = [
  { name: 'Mahdi Yassine',   role: 'Founder',          image: team1 },
  { name: 'Mahdi el Jabali', role: 'Product Manager',   image: team2 },
  { name: 'Abbas Faour',     role: 'Customer Support',  image: team3 },
];

const mvBoxes = [
  {
    title: 'Our Mission',
    text:  'To provide pure, natural, and affordable food products that help people live a healthier life.',
  },
  {
    title: 'Our Vision',
    text:  'To become the most trusted natural food brand in our region by focusing on quality, honesty, and care.',
  },
  {
    title: 'Our Values',
    text:  'Honesty, quality, sustainability, and community are the heart of everything we do.',
  },
];

function About() {
  return (
    <div className="nn-about pb-5">
      <PageBanner title="About Us" subtitle="Learn more about our story and mission." />

      <div className="container py-5">

        {/* ── Our Story ── */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-12 col-md-5">
            <img
              src={aboutImage}
              alt="Our Store"
              className="img-fluid rounded nn-about__img"
            />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="nn-about__story-title mb-3">Our Story</h3>
            <p>
              NaturaNest started as a small family business with a simple goal:
              to bring 100% natural and healthy products to every home.
              We believe that what we eat directly affects how we feel,
              so we carefully choose all our ingredients from trusted local farms.
            </p>
            <p className="mb-0">
              From our natural peanut butter to our raw honey and organic snacks,
              every product is made with care and love for our community.
            </p>
          </div>
        </div>

        {/* ── Mission / Vision / Values ── */}
        <div className="row g-4 mb-5 justify-content-center">
          {mvBoxes.map((box, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <div className="nn-mv-card h-100 text-center p-4">
                <h3 className="nn-mv-card__title">{box.title}</h3>
                <p className="mb-0">{box.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Team ── */}
        <h2 className="section-title">Meet the Team</h2>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((m, i) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
              <TeamCard name={m.name} role={m.role} image={m.image} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;
