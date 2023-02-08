import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext, useState} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
/*//Этот хук возвращает тип :UseThemeResult*/
export function useTheme():UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
                setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme
    }

}