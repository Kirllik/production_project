import {render} from "react-dom";
import {Counter} from "./component/Counter";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>    // компонент App это children для ThemeProvider:FC
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)