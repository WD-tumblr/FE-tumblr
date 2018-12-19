import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';

const PostCardList = (
  {
    userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
  },
) => (
  <div className="postCard__container">
    <Avatar avatarImg={avatarImg} />
    <div className="postCard">
      <div className="postCard__header">
        <span className="userId">{userId}</span>
      </div>
      <div className="postCard__content">
        <div className="postCard__title-container">
          <h2 className="postCard__heading">{title}</h2>
        </div>
        {cardImg && (
          <div className="postCard__image-container">
            <img src={cardImg} alt={cardImgAlt} />
          </div>
        )}
        <div className="postCard__bodyText">
          <p>{content}</p>
        </div>
        {tags && (<div className="postCard__tags">{tags}</div>)}
      </div>
      <div className="postCard__footer" />
    </div>
  </div>
);

export default PostCardList;
