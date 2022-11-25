import parse, { domToReact } from 'html-react-parser';
import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const parseOptions = {
  // Disable anchor tag.
  replace: ({ name, children }) =>
    name === 'a' && <span>{domToReact(children, parseOptions)}</span>,
};

function ThreadsItemBody({ threadId, threadTitle, threadBody }) {
  return (
    <section>
      <Link
        to={`/thread/${threadId}`}
        className="group block"
        title={threadTitle}
      >
        <h3 className="text-lg font-semibold group-hover:underline">
          {threadTitle}
        </h3>
        <div className="prose prose-zinc max-w-none text-zinc-500 line-clamp-5">
          {parse(threadBody, parseOptions)}
        </div>
      </Link>
    </section>
  );
}

ThreadsItemBody.propTypes = {
  threadId: string.isRequired,
  threadTitle: string.isRequired,
  threadBody: string.isRequired,
};

export default ThreadsItemBody;
