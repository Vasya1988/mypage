import classes from './Blog.module.sass'

const Blog = (props) => {
    return (
        <div
            className={classes.Blog}
        >
            <p>
                Привет!
                <br/>
                Меня зовут Василий, мне 34 года.
                <br/>
                <br/>
                В настоящий момент я работаю 3d Аниматором и фоторедактором. И вот, что бы не совмещать две эти работы, я решил пойти учиться на фронтенд разработчика. Со школы еще было у меня желание попробовать себя в программировании, но решился, только несколько лет назад. Обучение начинал в центре Специалист, изучал основы html, css, javascript.
                Далее пошел учиться в онлайн школу webcademy, где были уже более реалистичные студенческие проекты и подробный разбор ES6+.
                Далее, начал самостоятельно изучать React, вначале делал проекты на классовых компонентах, теперь на функциональных + хуки. React изучаю до сих пор. Как-либо сам, я не могу оценить твердо свой уровень, но на позиции junior, если в друг попадется задача, с которой я не сталкивался, думаю, при помощи интернета с ютубом, я смогу ее решить самостоятельно.
                <br/>
                <br/>
                Мой gitHub <a rel='noreferrer' target='_blank' href='https://github.com/Vasya1988'>https://github.com/Vasya1988</a>
            </p>
            <div className={classes.Social}>
                <a rel='noreferrer' target="_blank" href='https://www.instagram.com/vasiliy_romanov_88/?hl=ru'><img alt='instagram' src={props.icons.instagramLogo} /></a>
                <a rel='noreferrer' target="_blank" href='https://www.facebook.com/profile.php?id=100001263317483'>
                    <svg viewBox="0 0 36 36" className="b6ax4al1 m4pnbp5e somyomsx ahndzqod" fill="url(#jsc_c_2)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_c_2"><stop offset="0%" stopColor="#0062E0"></stop><stop offset="100%" stopColor="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path className="kbtg6tx2" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z " fill='#fff'></path></svg>
                </a>
                <a rel='noreferrer' target='_blank' href='https://github.com/Vasya1988'><img alt='github' src={props.icons.icons[5].src} /></a>
            </div>
        </div>
    )
}
export default Blog