import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {

const {theme, toggleTheme}=useTheme();  //хук смены темы

    return (
        <div className={classNames('app', {hovered:true, selected:true},[theme, 'cls2', 'cls3'])}>
            <Link to={'/about'}>О нас</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка...</div>}>  {/*//Lazy_Loading*/}
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    );
};

export default App;