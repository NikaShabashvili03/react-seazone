import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';
import { LanguageProvider } from './context/LanguageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


        <LanguageProvider>
          <BrowserRouter>
            <Provider store={store}>
              <App/>
            </Provider>
          </BrowserRouter>
        </LanguageProvider>


);