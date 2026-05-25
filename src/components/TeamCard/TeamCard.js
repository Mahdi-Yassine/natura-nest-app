import React from 'react';
import './TeamCard.css';

function TeamCard({ image, name, role }) {
  return (
    <div className="nn-team-card card border-0 text-center p-3">
      <div className="d-flex justify-content-center mb-3">
        <img
          src={image}
          alt={name}
          className="nn-team-card__avatar rounded-circle"
        />
      </div>
      <div className="card-body p-0">
        <h4 className="nn-team-card__name mb-1">{name}</h4>
        <p className="nn-team-card__role mb-0">{role}</p>
      </div>
    </div>
  );
}

export default TeamCard;
