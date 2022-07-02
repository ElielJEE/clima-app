import React, { useEffect, useState } from 'react';
import GetWeather from '../../Services/GetWeather'
import '../../Styles/SearchResults.css'

export default function SearchResults({ params }) {
  const { keyword } = params
  const [data, setData] = useState();

  useEffect(() => {
    GetWeather({ keyword })
      .then(data => {
        setData(data)
      })
  }, [keyword])

  return (
    <div className="main-container">
      {
        data ?
          (
            <>
              <div className="city-name__container">
                <h2 className="city-name">
                  {
                    data.location.name
                  }
                </h2>
              </div>
              <div className="info-header__container">
                <div className="info-header">
                  <div className="info-header__icon">
                    <img src={data.current.condition.icon} alt="icon" className='weather-icon' />
                  </div>
                  <div className="info-header__tempeture">
                    <p className="tempeture-info">
                      {`${data.current.temp_c}° / ${data.current.temp_f}°`}
                    </p>
                  </div>
                </div>
                <div className="info-header__weather">
                  <p className="weather-info">
                    {`Condicion: ${data.current.condition.text}`}
                  </p>
                </div>
              </div>
              <div className="info-body__container">
                <ul className="info-body__list">
                  <li className="info-list__item">
                    <p className="info-title">
                      Temperatura C°
                    </p>
                    <p className="info-data">
                      {`${data.current.feelslike_c}°`}
                    </p>
                  </li>
                  <li className="info-list__item">
                    <p className="info-title">
                      Temperatura F°
                    </p>
                    <p className="info-data">
                      {`${data.current.feelslike_f}°`}
                    </p>
                  </li>
                  <li className="info-list__item">
                    <p className="info-title">
                      {'Viento(mph)'}
                    </p>
                    <p className="info-data">
                      {`${data.current.wind_mph}mph`}
                    </p>
                  </li>
                  <li className="info-list__item">
                    <p className="info-title">
                      {'Viento(kph)'}
                    </p>
                    <p className="info-data">
                      {`${data.current.wind_kph}kph`}
                    </p>
                  </li>
                  <li className="info-list__item">
                    <p className="info-title">
                      Direccion del viento
                    </p>
                    <p className="info-data">
                      {`${data.current.wind_dir}`}
                    </p>
                  </li>
                  <li className="info-list__item">
                    <p className="info-title">
                      Humedad
                    </p>
                    <p className="info-data">
                      {`${data.current.humidity}%`}
                    </p>
                  </li>
                </ul>
              </div>
            </>
          ) :
          (
            <div className="no-results-content">
              no
            </div>
          )
      }
    </div>
  )
}