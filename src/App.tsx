import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Counter} from "./component/Counter";
import './component/index.scss'
import {AboutPageAsync} from "./component/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./component/MainPage/MainPageAsync";
import {Link} from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>О нас</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка...</div>}>  //Lazy_Loading
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            Counter
            <Counter/>
        </div>
    );
};

export default App;