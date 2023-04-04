import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'

function App() {

  const [latlon, setLalon] = useState()
  const [weather, setWeather] = useState()

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
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apiKey}`
      axios.get (url)
      .then(res => setWeather(res.data))
      .catch(error => console.log(error))
    }
    
  }, [latlon])
  

console.log(weather);
  
  
  return (
    <div className="App">
    <WeatherApp weather={weather}/>
        
    </div>
  )
}

export default App
