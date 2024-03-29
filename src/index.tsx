import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
            {' '}
            {/* компонент App это children для ThemeProvider:FC */}
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
