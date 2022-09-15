import classes from './Header.module.css'

const Header = () => {
    return (
        <header
            className={classes.Header}
        >
            <nav
                className={classes.Header__nav}
            >
                <a href='#'>about me</a>
                <a href='#'>my works</a>
                <a href='#'>blog</a>
            </nav>

        </header>
    )
}
export default Header;