const apiKey = 'c8e4b2b68d514f0c8e7220512220107'

export default function GetWeather({ keyword }) {
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${keyword}&aqi=yes`

  return fetch(apiUrl)
    .then(response => response.json())
    .then(res => {
      const { location, current } = res
      return { location, current }
    })
}