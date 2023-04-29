import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {populateReverseDependencyGraph} from "ts-loader/dist/utils";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        console.log(collapsed)
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Menu</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

