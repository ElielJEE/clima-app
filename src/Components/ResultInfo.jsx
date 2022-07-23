export default function ResultInfo({ location, icon, tempC, tempF, text, feelslikeC, feelslikeF, windMph, windKph, windDir, humidity}) {
  return (
    <>
      <div className="city-name__container">
        <h2 className="city-name">
          {
            location
          }
        </h2>
      </div>
      <div className="info-header__container">
        <div className="info-header">
          <div className="info-header__icon">
            <img src={icon} alt="icon" className='weather-icon' />
          </div>
          <div className="info-header__tempeture">
            <p className="tempeture-info">
              {`${tempC}° / ${tempF}°`}
            </p>
          </div>
        </div>
        <div className="info-header__weather">
          <p className="weather-info">
            {`Condicion: ${text}`}
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
              {`${feelslikeC}°`}
            </p>
          </li>
          <li className="info-list__item">
            <p className="info-title">
              Temperatura F°
            </p>
            <p className="info-data">
              {`${feelslikeF}°`}
            </p>
          </li>
          <li className="info-list__item">
            <p className="info-title">
              {'Viento(mph)'}
            </p>
            <p className="info-data">
              {`${windMph}mph`}
            </p>
          </li>
          <li className="info-list__item">
            <p className="info-title">
              {'Viento(kph)'}
            </p>
            <p className="info-data">
              {`${windKph}kph`}
            </p>
          </li>
          <li className="info-list__item">
            <p className="info-title">
              Direccion del viento
            </p>
            <p className="info-data">
              {`${windDir}`}
            </p>
          </li>
          <li className="info-list__item">
            <p className="info-title">
              Humedad
            </p>
            <p className="info-data">
              {`${humidity}%`}
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}