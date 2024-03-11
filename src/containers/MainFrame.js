import classes from './MainFrame.module.sass';
import Header from '../components/Header/Header';
import AboutMe from '../components/aboutMe/AboutMe';
import { useState, useEffect } from 'react';
import MyWorks from '../components/myWorks/MyWorks';
import Blog from '../components/blog/Blog';
import {Routes, Route} from 'react-router-dom';

const MainFrame = (props) => {
    
    const [darkTheme, setDarkTheme] = useState(document.documentElement.classList.contains('darkMode') ? 'dark' : 'light')
    console.log(darkTheme)

    useEffect(() => {
        if (new Date().getHours() > 19 && darkTheme === 'light') {
            setDarkTheme('dark');
            document.documentElement.classList.add('darkMode')
           }
    }, [])

    const fetchWeather = async () => {
        const apiKey = '57ad26d8d8989166f0ae73503542de6d'

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'denver'}&appid=${apiKey}&units=metric&lang=ru`)
        .then(res => res.json())
        .then(data => setDataWeather(
            {
                name: data.name, 
                temp: data.main.temp,
                icon: data.weather[0].icon
            },
            console.log('from fetch -->', data)
        ))
    }
    
    const [dataWeather, setDataWeather] = useState(fetchWeather)
    console.log('from data weather --> ', dataWeather)
    const skillsIcons = {
        icons: [
            {
                name: 'Html',
                src: require('../images/logo/html_logo.png')
            },
            {
                name: 'CSS',
                src: require('../images/logo/css_logo.png')
            },
            {
                name: 'React',
                src: require('../images/logo/react_logo.png')
            },
            {
                name: 'JavaScript',
                src: require('../images/logo/js_logo.png')
            },
            {
                name: 'Sass',
                src: require('../images/logo/sass_logo.png')
            },
            {
                name: 'GitHub',
                src: require('../images/logo/github_2_logo.png')
            },
            {
                name: 'Photoshop',
                src: require('../images/logo/photoshop_logo.png')
            },
            {
                name: 'Illustrator',
                src: require('../images/logo/illustrator_logo.png')
            },
        ],
        avatar: require('../images/logo/avatar.png'),
        avatarDark: require('../images/logo/avatar_dark.png'),
        arrow: require('../images/arrow.png'),
        instagramLogo: require('../images/instagram.png')
    };

    const myWorks = [
        {
            name: 'React Weather App',
            description: "Приложение 'Погода' написанное на React",
            url: 'https://vasya1988.github.io/weather-react-app/'
        },
        {
            name: 'Routes',
            description: 'Проложение маршрута с возможностью перетаскивания точек маршрута',
            url: 'https://vasya1988.github.io/routes-test/'
        },
        {
            name: 'ATM Machine',
            description: 'Приложение банкомат, выводит количество запрашиваемых банкнот на экран',
            url: 'https://vasya1988.github.io/atm/'
        },
        {
            name: 'Music App',
            description: 'Музыкальный плеер',
            url: 'https://vasya1988.github.io/musicapp/'
        },
        {
            name: 'Верстка сайта',
            description: 'Обычная верстка сайта desktop/mobile',
            url: 'https://vasya1988.github.io/test2/'
        },
        {
            name: 'React Todo App',
            description: 'Приложение списка задач. Добавил календарь, на чистом JS, где отмечены даты с задачами',
            url: 'https://vasya1988.github.io/todo-react/'
        },
        {
            name: 'Social Survey',
            description: 'Опрос для пользователей интренет-магазина детской обуви',
            url: 'https://vasya1988.github.io/social-survey/'
        }
    ];

    const darkModeIcons = {
        light: require('../images/light-mode-icon.png'), 
        dark: require('../images/night-mode-icon_dark-blue.png')
    }

    return (
        <div
            className={classes.MainFrame}
        >
            <Header 
                weatherData={dataWeather}
                darkModeIcons = {darkModeIcons}
                theme={darkTheme}
                setDarkTheme={setDarkTheme}
            />
            <Routes basename='/mypage'>
                <Route
                    path='/mypage'
                    element={<AboutMe works={myWorks} logo={skillsIcons} theme={darkTheme} />}
                ></Route>
                <Route
                    path='/works'
                    element={<MyWorks works={myWorks} logo={skillsIcons} />}
                ></Route>
                <Route
                    path='/blog'
                    element={<Blog icons={skillsIcons}/>}
                ></Route>
            </Routes>
        </div>

    )

}
export default MainFrame;