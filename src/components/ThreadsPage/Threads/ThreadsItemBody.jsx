import React from 'react';

function ThreadsItemBody() {
  return (
    <section className="flex flex-col gap-1">
      <h3 className="font-semibold">This is the thread title</h3>
      <p className="text-sm text-zinc-500/75">
        Deletes your browsing info when you close all InPrivate windows Saves
        collections, favorites, and downloads (but not download history)
        Prevents Microsoft Bing searches from being associated with you
      </p>
    </section>
  );
}

export default ThreadsItemBody;
