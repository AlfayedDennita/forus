import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import signInBannerJpg from './assets/images/sign-in-banner.jpg';
import signInBannerWebp from './assets/images/sign-in-banner.webp';
import signUpBannerJpg from './assets/images/sign-up-banner.jpg';
import signUpBannerWebp from './assets/images/sign-up-banner.webp';
import TopLoading from './components/ui/TopLoading';
import AuthLayout from './layouts/AuthLayout';
import BaseLayout from './layouts/BaseLayout';
import RootLayout from './layouts/RootLayout';
import CreateThreadPage from './pages/CreateThreadPage';
import ErrorPage from './pages/ErrorPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProtectedPage from './pages/ProtectedPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import ThreadsPage from './pages/ThreadsPage';
import { asyncPreloadProcess } from './states/isPreload/action';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'sign-in',
        element: (
          <AuthLayout
            bannerWebp={signInBannerWebp}
            bannerJpg={signInBannerJpg}
          />
        ),
        children: [
          {
            index: true,
            element: <SignInPage />,
          },
        ],
      },
      {
        path: 'sign-up',
        element: (
          <AuthLayout
            bannerWebp={signUpBannerWebp}
            bannerJpg={signUpBannerJpg}
          />
        ),
        children: [
          {
            index: true,
            element: <SignUpPage />,
          },
        ],
      },
      {
        element: <BaseLayout withSidebar />,
        children: [
          {
            index: true,
            element: <ThreadsPage />,
          },
          {
            path: 'threads',
            element: <ThreadsPage />,
          },
          {
            path: 'threads/user/:userId',
            element: <ThreadsPage />,
          },
          {
            path: 'threads/category/:category',
            element: <ThreadsPage />,
          },
          {
            path: 'thread/:threadId',
            element: <ThreadDetailPage />,
          },
        ],
      },
      {
        element: <BaseLayout />,
        children: [
          {
            path: 'thread/new',
            element: (
              <ProtectedPage>
                <CreateThreadPage />
              </ProtectedPage>
            ),
          },
          {
            path: 'leaderboard',
            element: <LeaderboardPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const isPreload = useSelector((states) => states.isPreload);

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  return (
    <>
      <TopLoading />
      {isPreload ? null : <RouterProvider router={router} />}
    </>
  );
}

export default App;
