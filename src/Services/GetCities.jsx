const apiKey = 'c8e4b2b68d514f0c8e7220512220107'

export default function GetCities({ city }) {
  const urlApi = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`

  return fetch(urlApi)
    .then(response => response.json())
    .then(res => {
      const cities = res.map(item => {
        const { name, id, url } = item
        return { name, id, url }
      })
      return cities;
    })
}