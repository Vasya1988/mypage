import classes from './MyWorks.module.sass'

const MyWorks = (props) => {

    return (
        <div className={classes.MyWorks}>
            {
                props.works.map((el, index) => {
                    return (
                        <a target='_blank' key={index} href={el.url} className={classes.Work}>
                            <span className={classes.Title}>{el.name}</span>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.7071 19.7071C28.0976 19.3166 28.0976 18.6834 27.7071 18.2929L21.3431 11.9289C20.9526 11.5384 20.3195 11.5384 19.9289 11.9289C19.5384 12.3195 19.5384 12.9526 19.9289 13.3431L25.5858 19L19.9289 24.6569C19.5384 25.0474 19.5384 25.6805 19.9289 26.0711C20.3195 26.4616 20.9526 26.4616 21.3431 26.0711L27.7071 19.7071ZM11 20H27V18H11V20Z" fill="black" />
                                <circle cx="19" cy="19" r="18" stroke="black" strokeWidth="2" />
                            </svg>

                            <span className={classes.Description}>
                                {el.description}
                            </span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default MyWorks;