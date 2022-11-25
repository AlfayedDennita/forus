import { bool, func } from 'prop-types';
import React, { useMemo } from 'react';
import { IoCaretDown } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

function DownvoteButton({ downvoteAction, neutralizeAction, downvoted }) {
  const authedUser = useSelector((states) => states.authedUser);
  const isSignedIn = authedUser !== null;

  const title = useMemo(() => {
    if (downvoted) {
      return 'Cancel Downvote';
    }
    return 'Downvote';
  }, [downvoted]);

  const onClick = () => {
    if (isSignedIn) {
      if (downvoted) {
        neutralizeAction();
      } else {
        downvoteAction();
      }
    } else {
      swal({
        title: 'Feature Locked',
        text: 'You need to be signed in to give downvote.',
        icon: 'info',
      });
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 transition-colors [@media(hover:hover){&:hover}]:bg-red-100 ${
        downvoted && 'bg-red-300'
      }`}
      title={title}
    >
      <IoCaretDown />
      <span className="sr-only">{title}</span>
    </button>
  );
}

DownvoteButton.propTypes = {
  downvoteAction: func.isRequired,
  neutralizeAction: func.isRequired,
  downvoted: bool.isRequired,
};

export default DownvoteButton;
