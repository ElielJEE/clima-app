import React from 'react';
import CityData from '../Data/CityData.json'
import HeaderItems from './HeaderItems';

export default function Header() {
  const cities = CityData.cities

  return (
    <div className="header-container">
      <form className="header-form">
        <select name="city" id="city-select" className='cities-container'>
          {
            cities.map(({ id, name }) => (
              <HeaderItems 
                key={id}
                name={name}
              />
            ))
          }
        </select>
      </form>
    </div>
  )
}