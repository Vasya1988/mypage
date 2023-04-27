import classes from './DarkMode.module.sass'
import appStyle from '../../App.css'

const DarkMode = (props) => {

    const themeIcons = () => props.theme === 'light' ? props.darkModeIcons.light : props.darkModeIcons.dark

    console.log(props.theme)
    
    return (
        <div
            className={classes.DarkMode}
        >
            <button
                className={classes.modeIcon}
                style={{backgrounImage: themeIcons()}}
            >
                <img src={themeIcons()} />
            </button>
            
        </div>
    )
}

export default DarkMode