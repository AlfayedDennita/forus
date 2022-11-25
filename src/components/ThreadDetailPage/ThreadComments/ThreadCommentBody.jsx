import parser from 'html-react-parser';
import { string } from 'prop-types';
import React from 'react';

function ThreadCommentBody({ commentContent }) {
  return (
    <div className="prose prose-sm prose-zinc max-w-none">
      {parser(commentContent)}
    </div>
  );
}

ThreadCommentBody.propTypes = {
  commentContent: string.isRequired,
};

export default ThreadCommentBody;
