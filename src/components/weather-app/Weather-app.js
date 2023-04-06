import { useState } from 'react'
import classes from './Weather-app.module.sass'

const apiKey = '57ad26d8d8989166f0ae73503542de6d'


const WeatherApp = (props) => {
    
    const [dataWeather, setDataWeather] = useState()

    const weather = async () => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'moscow'}&appid=${apiKey}&units=metric&lang=ru`)
    }
    // weather().then(res => res.json()).then(data => {setDataWeather({city: data.name, temp: data.main.temp})})
    // navigator.geolocation.getCurrentPosition()
    return (
        <div className={classes.WeatherApp} >
            <span className={classes.temp} >23°</span>
            <span className={classes.city}>Denver</span>
        </div>
    )
}
export default WeatherApp