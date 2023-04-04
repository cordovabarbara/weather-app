import React from 'react'

const WeatherApp = ({weather, temperature}) => {
    console.log(weather);
  return (
    <div>
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <p>{weather?.weather[0].description},{weather?.weather[0].main}</p>
    </div>
)
}

export default WeatherApp