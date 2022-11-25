import { string } from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function AuthLayout({ bannerWebp, bannerJpg }) {
  const navigate = useNavigate();
  const authedUser = useSelector((states) => states.authedUser);

  useEffect(() => {
    const isSignedIn = authedUser !== null;

    if (isSignedIn) {
      navigate('/');
    }
  }, [navigate, authedUser]);

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center sm:py-8 sm:px-28 md:px-16">
      <div className="grid h-full w-full flex-1 overflow-hidden bg-white sm:flex-initial sm:rounded-lg md:grid-cols-2">
        <picture className="hidden md:block">
          <source srcSet={bannerWebp} type="image/webp" />
          <img
            src={bannerJpg}
            className="aspect-square h-full w-full object-cover object-center brightness-90 grayscale-[25%]"
            alt=""
            loading="lazy"
          />
        </picture>
        <div className="mx-auto flex w-full flex-col gap-5 py-12 px-5 sm:items-center sm:justify-center sm:px-16 md:px-10 md:py-14 lg:p-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  bannerWebp: string.isRequired,
  bannerJpg: string.isRequired,
};

export default AuthLayout;
