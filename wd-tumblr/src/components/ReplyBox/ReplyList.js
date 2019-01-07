import React from 'react';
import ReplyListItem from './ReplyListItem';

const ReplyList = ({ replys, options }) => (
  <ul className="replys">
    {replys.map((v, i) => (
      <ReplyListItem
        key={i}
        replyId={v.id}
        options={options}
        {...v}
      />
    ))}
  </ul>
);

export default ReplyList;
