import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_KEY

  useEffect(() => {
    if (!capital) return

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`

    axios.get(url).then(response => {
      setWeather(response.data)
    })
  }, [capital, apiKey])

  if (!weather) return <p>Loading weather...</p>

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature {weather.main.temp} Celsius</p>

      <img src={iconUrl} alt="weather icon" />

      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather