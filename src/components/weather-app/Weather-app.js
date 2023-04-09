import { useState } from 'react'
import classes from './Weather-app.module.sass'




const WeatherApp = (props) => {
    console.log('From Weather-component --> ', props.weatherData.temp)
    
    return (
        <div className={classes.WeatherApp} >
            <span className={classes.temp} >{Math.round(props.weatherData.temp)}°</span>
            <span className={classes.city}>{props.weatherData.name}</span>
        </div>
    )
}
export default WeatherApp