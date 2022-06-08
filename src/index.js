import React from 'react';
import './index.scss';
import App from './App';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ReactNotifications } from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MainContextProvider } from 'context/MainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <CssBaseline />
      <ReactNotifications className="notificationComponent" />
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
