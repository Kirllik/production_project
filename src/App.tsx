import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {ThemeFunction} from "./theme/ThemeFunction";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

const {theme, toggleTheme}=useTheme();  //хук смены темы

    return (
        <div className={classNames('app', {hovered:true, selected:true},[theme, 'cls2', 'cls3'])}>
            <Link to={'/about'}>О нас</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка...</div>}>  {/*//Lazy_Loading*/}
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>{theme}</button>
            {/*  Counter
            <Counter/>*/}
        </div>
    );
};

export default App;