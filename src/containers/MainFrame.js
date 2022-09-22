import classes from './MainFrame.module.sass';
import Header from '../components/Header/Header';
import AboutMe from '../components/aboutMe/AboutMe';
import { useState } from 'react';
import MyWorks from '../components/myWorks/MyWorks';
import Blog from '../components/blog/Blog';
import {Routes, Route, Link} from 'react-router-dom';

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
        avatar: require('../images/logo/avatar.png'),
        arrow: require('../images/arrow.png')
    });

    const [myWorks, setMyWorks] = useState([
        {
            name: 'React Weather App',
            description: "Приложение 'Погода' написанное на React",
            url: 'https://vasya1988.github.io/weather-react-app/'
        },
        {
            name: 'Buy Cart',
            description: 'Корзина интернет магазина. Добавление, удаление, суммирование заказа',
            url: 'https://vasya1988.github.io/buyRolls/'
        },
        {
            name: 'All Iphone',
            description: 'Список всех Iphone. Добавлена темная тема',
            url: 'https://vasya1988.github.io/all_iphones/'
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
        },
        {
            name: 'Interview',
            description: 'Студенческий проект квиз опрос',
            url: 'https://vasya1988.github.io/interview/'
        }
    ])

    return (
        <div
            className={classes.MainFrame}
        >
            <Header />
            <Routes >
                <Route
                    path='/about'
                    element={<AboutMe works={myWorks} logo={skillsIcons} />}
                ></Route>
                <Route
                    path='/works'
                    element={<MyWorks works={myWorks} logo={skillsIcons} />}
                ></Route>
                <Route
                    path='/blog'
                    element={<Blog />}
                ></Route>
            </Routes>
        </div>

    )

}
export default MainFrame;