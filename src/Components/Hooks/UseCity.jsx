import { useEffect, useState } from "react";
import GetCities from "../../Services/GetCities";

export default function UseCity() {
  const [cityName, setCityName] = useState('Managua')
  const [city, setCity] = useState([])

  const handleChange = e => {
    setCityName(e.target.value)
  }
  
  
  useEffect(() => {
    GetCities({ city: cityName })
    .then(cities => {
      setCity(cities)
    })
  }, [cityName, setCity]);

  return { city, handleChange }
}