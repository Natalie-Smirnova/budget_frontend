import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from 'antd';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = {
    token: {
        // TODO replace with variable
        colorPrimary: '#4CAF50',
        fontFamily: 'Roboto, sans-serif',
    },
};

root.render(
    <React.StrictMode>
        <ConfigProvider theme={theme}>
            <App/>
        </ConfigProvider>
    </React.StrictMode>
);

reportWebVitals();
