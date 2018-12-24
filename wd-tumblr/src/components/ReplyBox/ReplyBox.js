import React from 'react';
import ReplyHeading from './ReplyHeading';
import ReplyContent from './ReplyContent';
import ReplyFooter from './ReplyFooter';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';
import './ReplyBox.scss';


const ReplyBox = ({
  userId = 'chany0310', replyCounts = 0, userProfileImg = DefaultUserProfileImg, replys,
}) => (
  <div
    className="replybox"
  >
    <ReplyHeading replyCounts={replyCounts} />
    <ReplyContent
      userId={userId}
      userProfileImg={userProfileImg}
      replys={replys}
    />
    <ReplyFooter />
  </div>
);

export default ReplyBox;
