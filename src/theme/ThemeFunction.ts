import {useState} from "react";

export type Theme = 'Dark' | 'Light';

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'Light'; //переменную LOCAL_STORAGE_THEME_KEY приводим к типу Theme и если переменная пустая то инициализируем её - Theme.LIGHT


export function ThemeFunction() {

    const [theme, setTheme] = useState()
}