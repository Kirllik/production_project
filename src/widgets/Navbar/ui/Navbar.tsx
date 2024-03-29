import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'; // обычный абсолютный путь, для шеред слоя это очень гуд
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
// Компоненты не требующие асинхронного чанка экспортируются именованным экспортом
export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={cls.mainLink}>О нас</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
        </div>
    </div>
);
