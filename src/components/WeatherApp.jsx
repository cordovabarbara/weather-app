import React, { useState } from 'react'

const WeatherApp = ({weather, temperature}) => {

  const [gradeTemperature, setgradeTemperature] = useState(true)

  const changeTemperature = () => {setgradeTemperature(!gradeTemperature)}


  return (
    <div>
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <p>{weather?.weather[0].description}, {weather?.weather[0].main}</p>
    <p>WindSpeed: {weather?.wind.speed}</p>

    <div>
      <p>
      {
        gradeTemperature
        ? `${temperature?.celsius} °C`
        : `${temperature?.farenheit} °F`
      }

      </p>
      <button onClick={changeTemperature}>Change to {gradeTemperature ? "°F" : "°C"}</button>
    </div>
    </div>
)
}

export default WeatherApp