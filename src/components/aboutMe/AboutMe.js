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
                    <h2>Junior frontend developer</h2>
                </div>
                <div
                    className={classes.IconsWrap}
                >
                    {props.logo.icons.map((icon) => {
                        return (
                            <div
                            className={classes.IconFrame}
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
                src={props.logo.avatar}
                className={classes.Avatar}
            
            ></img>
        </div>
    )
}
export default AboutMe;