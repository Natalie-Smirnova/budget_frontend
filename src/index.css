import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from 'antd';
import { store } from './store/store'
import { Provider } from 'react-redux'


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
        <Provider store={store}>
        <ConfigProvider theme={theme}>
            <App/>
        </ConfigProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
