import React from 'react';
import { IoCaretDown, IoCaretUp, IoChatbox } from 'react-icons/io5';

function ThreadsItemFooter() {
  return (
    <footer className="flex gap-3">
      <section className="items flex gap-1 divide-x rounded bg-zinc-100 p-1 px-2">
        <button type="button">
          <IoCaretUp />
        </button>
        <p className="px-2 text-sm text-zinc-400">+20</p>
        <button type="button">
          <IoCaretDown />
        </button>
      </section>
      <p className="inline-flex items-center gap-1 text-sm text-zinc-400">
        <IoChatbox /> <span>20</span>
      </p>
    </footer>
  );
}

export default ThreadsItemFooter;
