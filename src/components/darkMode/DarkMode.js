import classes from './DarkMode.module.sass'

const DarkMode = (props) => {

    const checkHours = () => new Date().getHours() > 19 ? props.darkModeIcons.dark : props.darkModeIcons.light
    
    return (
        <div
            className={classes.DarkMode}
        >
            <div
                className={classes.modeIcon}
            >
                <img src={checkHours()} />
            </div>
            
        </div>
    )
}

export default DarkMode