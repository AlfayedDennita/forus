import React from 'react';

function ThreadsItemHeader() {
  return (
    <header className="flex gap-2">
      <img
        className="object-fit h-8 w-8 rounded object-center"
        src="/images/leaderboard.jpg"
        alt=""
      />
      <section>
        <p className="text-xs">Alfayed Dennita (@alfayeddennita)</p>
        <p className="text-xs text-zinc-400">15 days ago</p>
      </section>
    </header>
  );
}

export default ThreadsItemHeader;
