// Card.js
import React from 'react';
import logo from '../../logo.svg'

const Card = ({ name, location, score, img, dt  }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg mb-4">
      {/* Card Image */}
      <img
        className="w-full h-80 object-cover"
        src={img}
        alt="Card"
      />

      {/* Card Body */}
      <div className="px-6 py-4">
        {/* Card Title */}
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default Card;
