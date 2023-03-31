type Mods = Record<string, boolean | string>  //Record-это тип TS где можно задать тип переменных ключ:значение в данном случае <string, boolean | string>

/*const obj: Mods = {  //проверка типов Mods
    'hover': '123'
}*/
//для опциональных Mods и additional можно при типизации поставить знак ?, или проинициализировать пустым {}
export function classNames(cls: string, mods?: Mods, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),   //разворачиваем массив, фильтруя его на undefined
        ...Object.entries(mods)  //возвращает массив, где каждый элемент массива представляет  из себя кортеж
            .filter(([key, value]) => Boolean(value)) //фильтруем бо TRUE
            .map(([key]) => key) //возвращаем ключ
    ]
        .join(' '); //склеиваем получившуюся строчку по пробелам
}