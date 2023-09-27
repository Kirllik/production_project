import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',

}
// LinkProps это тип в "react-router-dom", для пропсов компонента </Link>
// поэтому интерфейс AppLinkProps наследуем от LinkProps
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    // Деструкт пропсов для лучшей читабельности
    const {
        to, // пропс для  </Link> из "react-router-dom"
        className,
        children,
        theme = AppLinkTheme.PRIMARY, // если тему явно не указали, то по дефолту тема PRIMARY
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps} // для передачи всех пропсов пачкой
        >
            {children}
        </Link>
    );
};
