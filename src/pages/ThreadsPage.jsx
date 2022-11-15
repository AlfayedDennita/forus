import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CreateThread from '../components/ThreadsPage/CreateThread';
import LatestThreads from '../components/ThreadsPage/LatestThreads';
import Leaderboard from '../components/ThreadsPage/Leaderboard';
import Threads from '../components/ThreadsPage/Threads';

function ThreadsPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl md:my-8 md:flex md:items-start md:gap-6 md:px-16">
        <main className="flex flex-col md:order-last md:w-3/4 md:gap-6">
          <CreateThread />
          <Threads />
        </main>
        <aside className="flex flex-col justify-between md:w-1/4 md:gap-6">
          <Leaderboard />
          <LatestThreads />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default ThreadsPage;
