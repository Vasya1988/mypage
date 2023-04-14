import classes from './Header.module.sass'
import React from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import WeatherApp from '../weather-app/Weather-app';

const Header = (props) => {
    return (
        <header
            className={classes.Header}
        >
            <nav
                className={classes.Header__nav}
            >
                <NavLink to='/mypage'>about me</NavLink>
                <NavLink to='/works'>my works</NavLink>
                <NavLink to='/blog'>blog</NavLink>
            </nav>
            <div className={classes.codeWars}>
                <a 
                    href='https://www.codewars.com/users/va5ily'
                    target='_blank'
                    className={classes.codeWarsLink}
                >
                    <img src='https://www.codewars.com/users/va5ily/badges/small' />
                </a>
                <WeatherApp 
                    weatherData={props.weatherData}
                />
            </div>
            
        </header>
    )
}
export default Header;