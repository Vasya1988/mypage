import classes from './MainFrame.module.css';
import Header from '../components/Header/Header';
import AboutMe from '../components/aboutMe/AboutMe';
import { useState } from 'react';

const MainFrame = () => {

    const [skillsIcons, setSkillsIcons] = useState({
        iconHtml: require('../images/logo/html_logo.png'),
        iconCss: require('../images/logo/css_logo.png'),
        iconReact: require('../images/logo/react_logo.png'),
        iconJavaScript: require('../images/logo/js_logo.png'),
        iconGitHub: require('../images/logo/github_logo.png'),
        iconGitHubTwo: require('../images/logo/github_2_logo.png'),
        iconPhotoshop: require('../images/logo/photoshop_logo.png'),
        iconIllustrator: require('../images/logo/illustrator_logo.png'),
        avatar: require('../images/logo/avatar.png')
    })

    return (
        <div
            className={classes.MainFrame}
        >
            <Header />
            <AboutMe 
                logo = {skillsIcons}
            />
        </div>

    )

}
export default MainFrame;