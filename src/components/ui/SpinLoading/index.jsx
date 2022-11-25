import React from 'react';
import { FaSpinner } from 'react-icons/fa';

function SpinLoading() {
  return (
    <div className="flex items-center justify-center gap-2 py-4 text-center text-zinc-300">
      <FaSpinner className="animate-spin" />
      <p>Please wait</p>
    </div>
  );
}

export default SpinLoading;
