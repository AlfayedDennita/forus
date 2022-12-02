import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import VoteCounter from '../components/ui/VoteCounter';
import {
  setAuthedUserActionCreator,
  unsetAuthedUserActionCenter,
} from '../states/authedUser/action';

const story = {
  title: 'VoteCounter',
  component: VoteCounter,
};

export default story;

function WhenSignedOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(unsetAuthedUserActionCenter());
  }, [dispatch]);

  return (
    <VoteCounter
      upvoteAction={() => true}
      downvoteAction={() => true}
      neutralizeAction={() => true}
      upvotedBy={[]}
      downvotedBy={[]}
    />
  );
}

function WhenSignedIn() {
  const dispatch = useDispatch();

  const [upvotedBy, setUpvotedBy] = useState([]);
  const [downvotedBy, setDownvotedBy] = useState([]);

  useEffect(() => {
    dispatch(setAuthedUserActionCreator({ id: 'user-1' }));
  }, [dispatch]);

  const onUpvote = () => {
    setUpvotedBy(['user-1']);
    setDownvotedBy([]);
  };
  const onDownvote = () => {
    setUpvotedBy([]);
    setDownvotedBy(['user-1']);
  };
  const onNeutralize = () => {
    setUpvotedBy([]);
    setDownvotedBy([]);
  };

  return (
    <VoteCounter
      upvoteAction={onUpvote}
      downvoteAction={onDownvote}
      neutralizeAction={onNeutralize}
      upvotedBy={upvotedBy}
      downvotedBy={downvotedBy}
    />
  );
}

export { WhenSignedOut, WhenSignedIn };
