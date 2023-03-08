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
            <WeatherApp />
        </header>
    )
}
export default Header;