import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';

const PostCard = ({ userId }) => (
  <div className="postCard__container">
    <Avatar />
    <div className="postCard">
      <div className="postCard__header">
        <span>{userId}</span>
      </div>
      <div className="postCard__content">
        <div className="postCard__title" />
        <div className="postCard__image-container" />
        <div className="postCard__bodyText" />
        <div className="postCard__tags" />
      </div>
      <div className="postCard__footer" />
    </div>
  </div>
);

export default PostCard;
