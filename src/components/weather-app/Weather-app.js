import classes from './Weather-app.module.sass'




const WeatherApp = (props) => {
    // console.log('From Weather-component --> ', props.weatherData.temp)
    
    return (
        <div className={classes.WeatherApp} >
            <img alt='icon' src={`http://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`} />
            <span className={classes.temp} >{Math.round(props.weatherData.temp)}°</span>
            <span className={classes.city}>{props.weatherData.name}</span>
        </div>
    )
}
export default WeatherApp