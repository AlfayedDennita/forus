import React from 'react';
import { FaSpinner } from 'react-icons/fa';

function SpinLoading() {
  return (
    <div
      className="flex items-center justify-center gap-2 py-4 text-center text-zinc-300"
      data-testid="spin-loading"
    >
      <FaSpinner className="animate-spin" data-testid="spin-loading-spinner" />
      <p>Please wait</p>
    </div>
  );
}

export default SpinLoading;
