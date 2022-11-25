import './index.css';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import store from './states';

TimeAgo.addDefaultLocale(en);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
