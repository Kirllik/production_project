// Глобальная деклорация модулей

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

// -------ИЛИ---------
/*
declare module "*.module.css";
declare module "*.module.scss";
*/

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean; // Объявление константы для дебага языковой поддержки в Дэв режиме
