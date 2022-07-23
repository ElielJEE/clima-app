import { useEffect, useState } from 'react';
import GetWeather from '../../Services/GetWeather';

export default function UseWeather({ keyword } = { keyword: null }) {
  const [data, setData] = useState();

  const keywordToUse = keyword || 'managua'

  useEffect(() => {
    GetWeather({ keyword: keywordToUse })
      .then(data => {
        setData(data)
      })
  }, [keyword])

  return { data }
}