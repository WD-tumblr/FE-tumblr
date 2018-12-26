import React from 'react';
import ReplyListItem from './ReplyListItem';

const ReplyList = ({ replys }) => (
  <ul className="replys">
    {replys.map((v, i) => (
      <ReplyListItem
        key={i}
        {...v}
      />
    ))}
  </ul>
);

export default ReplyList;
