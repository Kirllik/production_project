import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {AppRoutes, routeConfig, RoutePath} from "shared/config/routeConfig/routeConfig";
import {Navbar} from "widgets/Navbar";


const App = () => {
    console.log("AppRoutes = ", AppRoutes)
    console.log("RoutePath = ", RoutePath)
    console.log("routeConfig ==", routeConfig)
    console.log(Object.values(routeConfig));

    const {theme} = useTheme();  //хук смены темы

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls2', 'cls3'])}>
            <Navbar/>
            <AppRouter/>

        </div>
    );
};

export default App;