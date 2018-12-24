import React from 'react';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';

const ReplyListItem = ({ profileImg = DefaultUserProfileImg }) => (
  <li className="replyItem">
    <p className="replyCounts">
      {`반응 ${replyCounts} 개`}
    </p>
  </li>
);

export default ReplyListItem;
