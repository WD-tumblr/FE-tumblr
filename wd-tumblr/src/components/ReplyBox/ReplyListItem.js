import React from 'react';
import Avatar from '../Avatar';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';

const ReplyListItem = ({ profileImg, userId, replyText }) => (
  <li className="replyItem">
    <Avatar
      avatarImg={DefaultUserProfileImg}
      containerClass="replyThumbnail__container"
      className="replyThumbnail"
    />
    <div className="replyText__container">
      <p className="userId">{userId}</p>
      <p className="replyText">{replyText}</p>
    </div>
  </li>
);

export default ReplyListItem;
