import React, { useState } from 'react'

const WeatherApp = ({weather, temperature}) => {

  const [gradeTemperature, setGradeTemperature] = useState()

  const changeTemperature = () => {setGradeTemperature(!gradeTemperature)}


  return (
    <div className='general__box'>
    <h1>Weather App</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <p className='descrip__box'>"{weather?.weather[0].description.replace(/\b(\w{1})/g,(match) => match.toUpperCase())}"</p>
    <div className='general__second'>
    <img className='img__temp' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=''/>

    
    <ul>
    <li><span>Clouds:</span> {weather?.clouds.all} %</li>
    <li><span>WindSpeed:</span> {weather?.wind.speed} m/s</li>
    <li><span>Preassure:</span> {weather?.main.pressure} hPa</li>
    </ul>
    </div>


    <div className='text__temp'>
      <p>
      {
        gradeTemperature
        ? `${temperature?.celsius} °C`
        : `${temperature?.farenheit} °F`
      }

      </p>
      <button className='change__temp' onClick={changeTemperature}>Change to {gradeTemperature ? "°F" : "°C"}</button>
    </div>
    </div>
)
}

export default WeatherApp