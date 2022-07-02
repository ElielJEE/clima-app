import React, { useEffect } from 'react';
import { Link } from 'wouter';

export default function Cities({ value }) {

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
    </div>
  )
}