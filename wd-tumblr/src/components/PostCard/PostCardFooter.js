import React from 'react';
import PopUp from '../PopUp';
import ReplyBox from '../ReplyBox';

const PostCardFooter = ({ postCardId, handleOptionBtnClick, isOpen }) => (
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
          <ReplyBox postCardId={postCardId} />
        </PopUp>
      </li>
      <li className="postCard__button">
        <a className="postCard__button-link" href="">
          <i className="postCard__icon-reblog" />
        </a>
      </li>
      <li className="postCard__button">
        <a className="postCard__button-link" href="">
          <i
            className="postCard__icon-options"
            onClick={handleOptionBtnClick}
          >
            <Popover
              isOpen={isOpen}
              deletePost={deletePost}
            />
          </i>
        </a>
      </li>
    </ul>
  </div>
);

export default PostCardFooter;