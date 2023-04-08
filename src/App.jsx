import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import LoadingPage from './components/LoadingPage'
import imageRandom from './utils/ImageRandom'


const img =[1,2,3,4,5]


function App() {

  const [latlon, setLalon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, settemperature] = useState()
  const [inputCity, setInputCity] = useState("")
  const [catchError, setcatchError] = useState(false)
  const [arrayImg, setarrayImg] = useState(imageRandom(img))

const style = {
  background: `url('./img/back${arrayImg}.jpg')`
}

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
  <div style={style} className="App">
    {
      weather? (
      <div>
      <WeatherApp 
      weather={weather}
      temperature={temperature}/>
        <form onSubmit={buttonSubmit}>
        <input id='nameCountry' placeholder='City name' type='text'></input>
        <button className='search'> Search</button>
        </form>
        {
          catchError &&
          (
          <h3>
          Sorry, the city is not found, please try again.
          </h3>
          )
        }
      </div>

      ): <LoadingPage/>
    }

    </div>
  )
}

export default App
