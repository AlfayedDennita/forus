import React from 'react';

import Button from '../../ui/Button';
import InputField from '../../ui/InputField';
import ThreadsList from './ThreadsList';

function Threads() {
  return (
    <section className="flex flex-col gap-4 bg-white p-6 md:rounded-lg">
      <h2 className="font-2xl text-2xl font-bold">All Threads</h2>
      <InputField
        type="search"
        title="Search by Title"
        placeholder="Search threads by title ..."
      />
      <ThreadsList />
      <Button type="button" title="Load More Threads">
        Load More Threads
      </Button>
    </section>
  );
}

export default Threads;
