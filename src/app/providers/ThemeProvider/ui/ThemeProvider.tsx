
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT; //переменную LOCAL_STORAGE_THEME_KEY приводим к типу Theme и если переменная пустая то инициализируем её - Theme.LIGHT

const ThemeProvider:FC= ({children}) => {

    const [theme, setTheme] = useState < Theme > (defaultTheme)


    const defaultValue = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;