import React, { useMemo } from 'react';
import { IoChatboxEllipses, IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

import { unsetAuthedUser } from '../../../states/authedUser/action';
import Button from '../../ui/Button';

function NavbarMenuList() {
  const dispatch = useDispatch();
  const authedUser = useSelector((states) => states.authedUser);

  const menuItems = useMemo(() => {
    const isSignedIn = authedUser !== null;

    if (isSignedIn) {
      const onSignOutButtonClick = () => {
        dispatch(unsetAuthedUser());

        swal({
          title: 'Signed Out',
          text: "You're successfully signed out.",
          icon: 'success',
          button: 'Close',
        });
      };

      return (
        <>
          <li>
            <Button
              type="link"
              to={`/threads/user/${authedUser.id}`}
              variant="secondary"
              title="My Threads"
            >
              <IoChatboxEllipses className="text-2xl md:text-base" />
              <span className="sr-only md:not-sr-only">My Threads</span>
            </Button>
          </li>
          <li>
            <Button
              type="button"
              onClick={onSignOutButtonClick}
              variant="secondary"
              title="Sign Out"
            >
              <IoLogOut className="text-2xl text-red-400 md:text-base" />
              <span className="sr-only text-red-400 md:not-sr-only">
                Sign Out
              </span>
            </Button>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Button type="link" to="/sign-up" variant="secondary" title="Sign Up">
            Sign Up
          </Button>
        </li>
        <li>
          <Button type="link" to="/sign-in" title="Sign In">
            Sign In
          </Button>
        </li>
      </>
    );
  }, [dispatch, authedUser]);

  return <ul className="flex flex-wrap gap-3 md:gap-4">{menuItems}</ul>;
}

export default NavbarMenuList;
