import App from "./app/App";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>    {/*компонент App это children для ThemeProvider:FC*/}
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)