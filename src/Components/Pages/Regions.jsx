import React from 'react';
import Cities from '../Cities';

export default function Regions({ city }) {
  return (
    <div className="Regions-container">
      <Cities value={city} />
    </div>
  )
}