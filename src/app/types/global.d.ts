declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

//-------ИЛИ---------
/*
declare module "*.module.css";
declare module "*.module.scss";
*/
