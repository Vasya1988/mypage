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
                    <div
                        className={classes.IconFrame}
                    >
                        <span>Html</span>
                        <img  
                            src={props.logo.iconHtml}>
                        </img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>CSS</span>
                        <img
                            src={props.logo.iconCss}
                        ></img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>React</span>
                        <img
                            src={props.logo.iconReact}
                        ></img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>JavaScript</span>
                        <img
                            src={props.logo.iconJavaScript}
                        ></img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>GitHub</span>
                        <img
                            src={props.logo.iconGitHubTwo}
                        ></img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>Photoshop</span>
                        <img
                            src={props.logo.iconPhotoshop}
                        ></img>
                    </div>
                    <div
                        className={classes.IconFrame}
                    >
                        <span>Illustrator</span>
                        <img
                            src={props.logo.iconIllustrator}
                        ></img>
                    </div>
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