import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import swal from 'sweetalert';

import { unsetGlobalErrorActionCreator } from '../states/globalError/action';

function RootLayout() {
  const dispatch = useDispatch();
  const globalError = useSelector((states) => states.globalError);

  useEffect(() => {
    const showModalAlert = async () => {
      await swal({
        title: 'Error',
        text: globalError.message,
        icon: 'error',
        button: 'Close',
      });
      dispatch(unsetGlobalErrorActionCreator());
    };

    if (globalError.isError) {
      showModalAlert();
    }
  }, [dispatch, globalError]);

  return (
    <>
      <HashLink
        to="#main-content"
        className="outline-3 absolute left-2 top-2 -translate-x-[calc(100%+theme(spacing.2))] bg-primary-500 px-4 py-2 font-semibold text-white outline-offset-2 outline-secondary-500 transition-all hover:bg-transparent hover:text-primary-500 focus:translate-x-0"
        title="Skip to Content"
      >
        Skip to Content
      </HashLink>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default RootLayout;
