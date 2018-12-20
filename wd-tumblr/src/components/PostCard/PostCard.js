import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';
import PopUp from '../PopUp';
import ReplyBox from '../ReplyBox';

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
      <div className="postCard__footer">
        <div className="notes__container" />
        <ul className="postCard__buttons">
          <li className="postCard__button">
            <a className="postCard__button-link">
              <i className="postCard__icon-share" />
            </a>
          </li>
          <li className="postCard__button">
            <a className="postCard__button-link">
              <i className="postCard__icon-reply" />
              <PopUp>
                <ReplyBox />
              </PopUp>
            </a>
          </li>
          <li className="postCard__button">
            <a className="postCard__button-link" href="">
              <i className="postCard__icon-reblog" />
            </a>
          </li>
          <li className="postCard__button">
            <a className="postCard__button-link" href="">
              <i className="postCard__icon-options" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default PostCardList;
