import { useState } from 'react'
import classes from './Weather-app.module.sass'

const apiKey = '57ad26d8d8989166f0ae73503542de6d'


const WeatherApp = (props) => {
    const weather = async () => {
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'moscow'}&appid=${apiKey}&units=metric&lang=ru`)
        const data = await getData.json()
        return data
    }
    
    
    // navigator.geolocation.getCurrentPosition()
    console.log(weather().then())
    return (
        <div className={classes.WeatherApp} >
            <div className={classes.degree} >4</div>
            <div className={classes.city}>Pushkino</div>
        </div>
    )
}
export default WeatherApp