import classes from './Header.module.sass'
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header
            className={classes.Header}
        >
            <nav
                className={classes.Header__nav}
            >
                <Link to='/about'>about me</Link>
                <Link to='/works'>my works</Link>
                <Link to='/blog'>blog</Link>
            </nav>

        </header>
    )
}
export default Header;