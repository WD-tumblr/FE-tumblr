import React from 'react';
import PopUp from '../PopUp';
import ReplyBox from '../ReplyBox';

const PostCardFooter = () => (
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
        </a>
        <PopUp>
          <ReplyBox />
        </PopUp>
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
);

export default PostCardFooter;
