import { useEffect, useState } from "react";
import GetCities from "../../Services/GetCities";
import { useLocation } from 'wouter';

export default function UseCity() {
  const [path, pushLocation] = useLocation()
  const [cityName, setCityName] = useState('Managua')
  const [city, setCity] = useState([])

  const handleChange = e => {
    pushLocation(`/search/${e.target.value}`)
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