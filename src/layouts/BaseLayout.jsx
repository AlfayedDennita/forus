import { bool } from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import Categories from '../components/BaseLayout/Categories';
import Footer from '../components/BaseLayout/Footer';
import LatestThreads from '../components/BaseLayout/LatestThreads';
import Leaderboard from '../components/BaseLayout/Leaderboard';
import Navbar from '../components/BaseLayout/Navbar';
import ScrollToTopButton from '../components/BaseLayout/ScrollToTopButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function BaseLayout({ withSidebar }) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const isThreadsPage =
      location.pathname === '/' || location.pathname.startsWith('/threads');

    if (!isThreadsPage) {
      dispatch(asyncPopulateUsersAndThreads());
    }
  }, [location, dispatch]);

  return (
    <div className="flex min-h-screen flex-col justify-between divide-y divide-zinc-100 sm:gap-8 sm:divide-y-0">
      <Navbar />
      <div
        className={`mx-auto grid h-full w-full flex-1 divide-y divide-zinc-100 sm:gap-5 sm:divide-y-0 sm:px-5 md:gap-6 md:px-10 lg:px-16 ${
          withSidebar ? 'max-w-screen-xl' : 'max-w-screen-md'
        } ${withSidebar && 'md:grid-cols-[4fr_6fr] lg:grid-cols-[3fr_7fr]'}`}
      >
        <main
          className="flex flex-col divide-y divide-zinc-100 sm:gap-6 sm:divide-y-0 md:order-last"
          id="main-content"
        >
          <Outlet />
        </main>
        {withSidebar && (
          <aside className="flex flex-col divide-y divide-zinc-100 sm:gap-6 sm:divide-y-0">
            <Categories />
            <LatestThreads />
            <Leaderboard />
          </aside>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

BaseLayout.propTypes = {
  withSidebar: bool,
};

BaseLayout.defaultProps = {
  withSidebar: false,
};

export default BaseLayout;
