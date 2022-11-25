import { bool, func } from 'prop-types';
import React, { useMemo } from 'react';
import { IoCaretUp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

function UpvoteButton({ upvoteAction, neutralizeAction, upvoted }) {
  const authedUser = useSelector((states) => states.authedUser);
  const isSignedIn = authedUser !== null;

  const title = useMemo(() => {
    if (upvoted) {
      return 'Cancel Upvote';
    }
    return 'Upvote';
  }, [upvoted]);

  const onClick = () => {
    if (isSignedIn) {
      if (upvoted) {
        neutralizeAction();
      } else {
        upvoteAction();
      }
    } else {
      swal({
        title: 'Feature Locked',
        text: 'You need to be signed in to give upvote.',
        icon: 'info',
      });
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 transition-colors [@media(hover:hover){&:hover}]:bg-green-100 ${
        upvoted && 'bg-green-300'
      }`}
      title={title}
    >
      <IoCaretUp />
      <span className="sr-only">{title}</span>
    </button>
  );
}

UpvoteButton.propTypes = {
  upvoteAction: func.isRequired,
  neutralizeAction: func.isRequired,
  upvoted: bool.isRequired,
};

export default UpvoteButton;
