import React from 'react';

export default ({ comments }) => {

  const renderedComments = Object.values(comments).map(comment => {
    if (comment.status === 'approved') {
      comment = comment.content;
    }

    if (comment.status === 'pendig') {
      comment = 'This comment is awaiting moderation.';
    }

    if (comment.status === 'rejected') {
      comment = 'This comment has been rejected.';
    }

    return (
      <li key={comment.id} >
        {comment} (ID: {comment.id})
      </li>
    )
  });

  return (
    <ul>{renderedComments}</ul>
  );

};
