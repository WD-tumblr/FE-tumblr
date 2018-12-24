import React from 'react';

const ReplyList = ({ replyList }) => (
  <ul className="replys">
    <p className="replyCounts">
      {`반응 ${replyCounts} 개`}
    </p>
  </ul>
);

export default ReplyList;
