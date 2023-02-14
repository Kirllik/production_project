import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "app/providers/router/ui/AppRouter";
import {AppRoutes, routeConfig, RoutePath} from "shared/config/routeConfig/routeConfig";


const App = () => {
    console.log("AppRoutes = ", AppRoutes)
    console.log("RoutePath = ", RoutePath)
    console.log("routeConfig ==", routeConfig)
    console.log(Object.values(routeConfig));

    const {theme, toggleTheme} = useTheme();  //хук смены темы

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls2', 'cls3'])}>
            <Link to={'/about'}>О нас</Link>
            <Link to={'/'}>Главная</Link>
            <AppRouter/>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    );
};

export default App;