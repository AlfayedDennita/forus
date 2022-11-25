import parser from 'html-react-parser';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import stringToColor from 'string-to-color';

import { toKebabCase } from '../../../utils';

function ThreadDetailBody() {
  const threadDetail = useSelector((states) => states.threadDetail);

  return (
    <section className="flex flex-col gap-6 px-5 py-4 lg:px-6">
      <header className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold">{threadDetail.title}</h2>
        <Link
          to={`/threads/category/${threadDetail.category}`}
          style={{ color: stringToColor(threadDetail.category) }}
          className="font-bold hover:underline"
          title={`See ${threadDetail.category} Threads`}
        >
          #{toKebabCase(threadDetail.category)}
        </Link>
      </header>
      <div className="prose prose-zinc max-w-none">
        {parser(threadDetail.body)}
      </div>
    </section>
  );
}

export default ThreadDetailBody;
