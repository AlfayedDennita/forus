import React from 'react';
import { Link } from 'react-router-dom';

import SidebarSection from '../SidebarSection';

function Leaderboard() {
  const leaderboards = [
    {
      users: {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/images/leaderboard.jpg',
      },
      score: 10,
    },
    {
      users: {
        id: 'users-2',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: '/images/leaderboard.jpg',
      },
      score: 5,
    },
    {
      users: {
        id: 'users-3',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/images/leaderboard.jpg',
      },
      score: 120,
    },
    {
      users: {
        id: 'users-4',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: '/images/leaderboard.jpg',
      },
      score: 52,
    },
    {
      users: {
        id: 'users-5',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/images/leaderboard.jpg',
      },
      score: 130,
    },
  ];

  return (
    <SidebarSection title="Leaderboard">
      <ul className="flex flex-col gap-4">
        {leaderboards.map((leaderboard) => (
          <li className="flex items-center gap-3" key={leaderboard.users.id}>
            <img
              className="h-14 w-14 rounded object-cover object-center"
              src={leaderboard.users.avatar}
              alt={leaderboard.users.name}
              loading="lazy"
            />
            <section className="flex flex-col gap-1">
              <h3 className="font-semibold">{leaderboard.users.name}</h3>
              <p className="flex flex-wrap gap-1 text-sm text-zinc-400">
                <Link
                  className="hover:underline"
                  to={`/threads/by-user/${leaderboard.users.id}`}
                  title={`See ${leaderboard.users.name} Threads`}
                >
                  @{leaderboard.users.id}
                </Link>
                <span>&bull;</span>
                <span>{leaderboard.score} Point</span>
              </p>
            </section>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}

export default Leaderboard;
