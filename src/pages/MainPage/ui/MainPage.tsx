import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation(); // Хук перевода
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
