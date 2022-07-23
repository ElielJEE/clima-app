import React from 'react';
import CityData from '../Data/CityData.json'
import HeaderItems from './HeaderItems';
import '../Styles/Header.css'
import UseCity from './Hooks/UseCity';
import Regions from './Pages/Regions';
import { Link } from 'wouter';

export default function Header() {
  const cities = CityData.cities
  const { city, handleChange } = UseCity()

  return (
    <div className="header-container">
      <Link to="/">
        <h2 className="page-title">
          Hidrogeonica
        </h2>
      </Link>
      <div className="header-content">
        <form className="header-form">
          <select
            name="city"
            id="city-select"
            className='cities-container'
            onChange={handleChange}
          >
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
        <Regions city={city} />
      </div>
    </div>
  )
}