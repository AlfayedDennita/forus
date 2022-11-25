import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import { useRouteError } from 'react-router-dom';

import Button from '../components/ui/Button';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center px-5 py-10 sm:px-16">
      <main
        className="flex flex-col items-center justify-center gap-4 text-center text-zinc-500"
        id="main-content"
      >
        {error.status ? (
          <p className="text-9xl font-bold ">{error.status}</p>
        ) : (
          <FaRegSadCry className="text-9xl" />
        )}
        <h1 className="font-heading text-xl ">
          {error.statusText || 'Something Wrong Happened'}
        </h1>
        <Button type="link" to="/" title="Back to Home">
          Back to Home
        </Button>
      </main>
    </div>
  );
}

export default ErrorPage;
