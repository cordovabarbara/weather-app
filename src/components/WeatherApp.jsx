import React, { useState } from 'react'

const WeatherApp = ({weather, temperature}) => {

  const [gradeTemperature, setGradeTemperature] = useState(true)

  const changeTemperature = () => {setGradeTemperature(!gradeTemperature)}

  console.log(weather);


  return (
    <div>
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=''/>

    <p>"{weather?.weather[0].description.replace(/\b(\w{1})/g,(match) => match.toUpperCase())}"</p>
    <p><span>Clouds:</span> {weather?.clouds.all} %</p>
    <p><span>WindSpeed:</span> {weather?.wind.speed} m/s</p>
    <p><span>Preassure:</span> {weather?.main.pressure} hPa</p>

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