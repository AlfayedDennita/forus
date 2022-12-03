import '../src/index.css';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../src/states';

TimeAgo.addDefaultLocale(en);

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorators = [
  (Story) => (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ReduxProvider>
  ),
];

export { parameters, decorators };
