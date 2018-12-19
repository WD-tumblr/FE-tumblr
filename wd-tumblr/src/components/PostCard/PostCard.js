import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';

const PostCardList = (
  {
    userId, avatarImg, cardImg, cardImgAlt, cardTitle, cardBodytext, cardTags,
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
          <h2 className="postCard__heading">{cardTitle}</h2>
        </div>
        {cardImg && (
          <div className="postCard__image-container">
            <img src={cardImg} alt={cardImgAlt} />
          </div>
        )}
        <div className="postCard__bodyText">
          <p>{cardBodytext}</p>
        </div>
        {cardTags && (<div className="postCard__tags" />)}
      </div>
      <div className="postCard__footer" />
    </div>
  </div>
);

export default PostCardList;
