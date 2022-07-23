import '../../Styles/SearchResults.css'
import UseWeather from '../Hooks/UseWeather';
import ResultInfo from '../ResultInfo';

export default function SearchResults({ params }) {
  const { keyword } = params
  const { data } = UseWeather({ keyword })

  return (
    <div className="main-container">
      {
        data ?
          (
            <ResultInfo
              location={data.location.name}
              icon={data.current.condition.icon}
              tempC={data.current.temp_c}
              tempF={data.current.temp_f}
              text={data.current.condition.text}
              feelslikeC={data.current.feelslike_c}
              feelslikeF={data.current.feelslike_f}
              windKph={data.current.wind_kph}
              windMph={data.current.wind_mph}
              windDir={data.current.wind_dir}
              humidity={data.current.humidity}
            />
          ) :
          (
            <div className="no-results-content">
              <p className="no-results">
                Esperando resultados...
              </p>
            </div>
          )
      }
    </div>
  )
}