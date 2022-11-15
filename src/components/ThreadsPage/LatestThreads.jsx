import React from 'react';
import { Link } from 'react-router-dom';

import SidebarSection from '../SidebarSection';

function LatestThreads() {
  const threads = [
    {
      title: 'Hello World',
      id: 'xyz',
    },
    {
      title: 'Hello Worsada',
      id: 'xyz2',
    },
    {
      title: 'Hello Worsadsaewaeaa',
      id: 'xyz3',
    },
    {
      title: 'Hello Woewaewaeeawarsada',
      id: 'xyz4',
    },
    {
      title: 'Hewewaeawllo Worsada',
      id: 'xyz5',
    },
  ];

  return (
    <SidebarSection title="Latest Threads">
      <ul className="flex flex-col divide-y divide-zinc-100">
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link
              className="block py-3 transition-all hover:bg-zinc-50 hover:px-3"
              to="/"
              title={thread.title}
            >
              <p className="font-semibold">{thread.title}</p>
              <p className="flex flex-wrap gap-2 text-sm text-zinc-400">
                by @wraper &bull; 20 minutes ago
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}

export default LatestThreads;
