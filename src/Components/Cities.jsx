import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Cities({ value }) {
  const [path, pushLocation] = useLocation()

  const handleChangeRegion = (e) => {
    pushLocation(`/search/${e.target.value}`)
  }

  return (
    <div className="region-list-container">
      <ul className="region-list">
        {
          value.map(({ name, id, url }) => (
            <Link key={id} to={`/search/${url}`} className='list-link'>
              <li className="list-item__region">
                {name}
              </li>
            </Link>
          ))
        }
      </ul>
      <select name="region" id="region-select" className="region-list__select" onChange={handleChangeRegion}>
        {
          value.map(({ name, id, url }) => (
            <option key={id} className="list-item__region" value={url}>
              {name}
            </option>
          ))
        }
      </select>
    </div>
  )
}