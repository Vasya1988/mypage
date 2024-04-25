import classes from './Header.module.sass'
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import WeatherApp from '../weather-app/Weather-app';
import DarkMode from '../darkMode/DarkMode';

const Header = (props) => {

    const [hash, setHash] = useState(window.location.pathname)

    return (
        <header
            className={classes.Header}
        >
            <nav
                className={classes.Header__nav}
                onClick={() => setHash(window.location.hash)}
            >
                <Link className={hash === '#/' || hash === '/' ? 'active' : ''} to='/'>about me</Link>
                <Link className={hash === '#/works' ? 'active' : ''} to='/works'>my works</Link>
                <Link className={hash === '#/blog' ? 'active' : ''} to='/blog'>blog</Link>
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