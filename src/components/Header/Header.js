import classes from './Header.module.sass'
import React from 'react';
import {Link} from 'react-router-dom'
import WeatherApp from '../weather-app/Weather-app';
import DarkMode from '../darkMode/DarkMode';

const Header = (props) => {

    return (
        <header
            className={classes.Header}
        >
            <nav
                className={classes.Header__nav}
            >
                <Link to='/'>about me</Link>
                <Link to='/works'>my works</Link>
                <Link to='/blog'>blog</Link>
            </nav>
            <div className={classes.codeWars}>
                <a 
                    rel='noreferrer'
                    href='https://www.codewars.com/users/va5ily'
                    target='_blank'
                    className={classes.codeWarsLink}
                >
                    <img alt='badge' src='https://www.codewars.com/users/va5ily/badges/small' />
                </a>
                <WeatherApp 
                    weatherData={props.weatherData}
                />
                <DarkMode 
                    theme={props.theme}
                    darkModeIcons={props.darkModeIcons}
                    setDarkTheme={props.setDarkTheme}
                />
            </div>
            
        </header>
    )
}
export default Header;