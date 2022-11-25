import React from 'react';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center py-6 px-5 text-center md:px-10 lg:px-16">
        <p className="text-sm text-zinc-400">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
