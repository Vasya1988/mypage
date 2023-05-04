import classes from './DarkMode.module.sass'
import appStyle from '../../index.css'

const DarkMode = (props) => {

    const themeIcons = () => props.theme === 'light' ? props.darkModeIcons.light : props.darkModeIcons.dark

    const buttonToggle = (event) => {
        document.documentElement.classList.contains('darkMode') 
        ? document.documentElement.classList.remove('darkMode')
        : document.documentElement.classList.add('darkMode')
        props.setDarkTheme(props.theme === 'light' ? 'dark' : 'light')
    }
    
    return (
        <div
            className={classes.DarkMode}
        >
            <button
                onClick={buttonToggle}
                className={classes.modeIcon}
                style={{backgrounImage: themeIcons(), left: props.theme === 'light' ? '0' : '28px'}}
            >
                <img src={themeIcons()} />
            </button>
            
        </div>
    )
}

export default DarkMode