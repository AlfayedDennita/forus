import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ThreadsPage from './pages/ThreadsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ThreadsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
