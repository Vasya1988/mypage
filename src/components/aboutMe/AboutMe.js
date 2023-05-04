import classes from './AboutMe.module.sass';
import React from 'react';

const AboutMe = (props) => {
    return (
        <div
            className={classes.AboutMe}
        >
            <div>
                <div 
                    className={classes.MyInfo}
                >
                    <h1><span>Romanov</span> Vasily</h1>
                    <h2>Frontend developer</h2>
                </div>
                <div
                    className={classes.IconsWrap}
                >
                    {props.logo.icons.map((icon, index) => {
                        return (
                            <div
                            className={classes.IconFrame}
                            key={index}
                            >
                                <span>{icon.name}</span>
                                <img  
                                    src={icon.src}>
                                </img>
                            </div>
                        )
                    })}   
                </div>
            </div>
            <img 
                src={props.theme === 'dark' ? props.logo.avatarDark : props.logo.avatar}
                className={classes.Avatar}
            ></img>
        </div>
    )
}
export default AboutMe;