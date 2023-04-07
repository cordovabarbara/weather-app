import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import LoadingPage from './components/LoadingPage'
import CatchError from './components/CatchError'

function App() {

  const [latlon, setLalon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, settemperature] = useState()
  const [inputCity, setInputCity] = useState("")
  const [catchError, setcatchError] = useState(false)



  useEffect(() => {

    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setLalon(obj)
    }
    const error = error => {
      console.log(error)
    }
  
    navigator.geolocation.getCurrentPosition(success,error)

  }, [])

  useEffect(() => {
    if (latlon) {
      const apiKey = '16ee042d20cf237fd3d0a4407a66eac4'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&q=${inputCity}&appid=${apiKey}`
      axios.get (url)
      .then(res => { 
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celsius * 9/5 + 32).toFixed(1)
        
        settemperature({ celsius, farenheit})
        setWeather(res.data)
        setcatchError(false)

      
      })
      .catch(error => 
        {console.log(error) 
        setcatchError(true)})
    }
    
  }, [latlon, inputCity])


  const buttonSubmit = e => 
  {e.preventDefault()
    setInputCity(e.target.nameCountry.value)
    e.target.nameCountry.value=''
  }
  
  return (
  <div className="App">
    {
      catchError
      ? <CatchError/>
      :
      weather? 
      <WeatherApp 
      weather={weather}
      temperature={temperature}/>

      : <LoadingPage/>
    }

    <form onSubmit={buttonSubmit}>
    <input id='nameCountry' placeholder='City name' type='text'></input>
    <button className='search'> Search</button>
    </form>
    </div>
  )
}

export default App
