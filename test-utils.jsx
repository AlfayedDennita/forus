/* eslint-disable react/prop-types */

import { render } from '@testing-library/react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './src/states';

TimeAgo.addDefaultLocale(en);

function AllTheProviders({ children }) {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
  );
}

const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
