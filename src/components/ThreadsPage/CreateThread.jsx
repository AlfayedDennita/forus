import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import Button from '../ui/Button';
import InputField from '../ui/InputField';

function CreateThread() {
  return (
    <section className="flex gap-4 bg-white p-6 md:rounded-lg">
      <img
        className="object-fit h-10 w-10 rounded object-cover"
        src="/images/leaderboard.jpg"
        alt=""
        loading="lazy"
      />
      <InputField
        className="flex-1"
        type="text"
        placeholder="Hello John, what's on your mind?"
      />
      <Button
        className="inline-flex items-center justify-center gap-1 rounded bg-primary-500 py-2 px-4 font-semibold text-white"
        type="button"
        title="Create New Thread"
      >
        <FiExternalLink />
        <span className="hidden md:inline">Create</span>
      </Button>
    </section>
  );
}

export default CreateThread;
