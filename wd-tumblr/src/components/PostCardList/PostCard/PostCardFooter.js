import React from 'react';
import PopUp from '../../common/PopUp';
import Popover from '../../common/Popover';
import ReplyBox from '../../ReplyBox';

const PostCardFooter = ({
  popupState, handleReplyButtonClick,
  userid,
  postCardId, handleOptionButtonClick, isOpen, deletePost,
}) => (
  <div className="postCard__footer">
    <div className="notes__container" />
    <ul className="postCard__buttons">
      <li className="postCard__button">
        <a className="postCard__button-link">
          <i className="postCard__icon-share" />
        </a>
      </li>
      <li className="postCard__button">
        <a
          className="postCard__button-link"
          onClick={handleReplyButtonClick}
        >
          <i className="postCard__icon-reply" />
        </a>
        <PopUp popupState={popupState}>
          <ReplyBox
            postCardId={postCardId}
            userid={userid}
          />
        </PopUp>
      </li>
      <li className="postCard__button">
        <a className="postCard__button-link" href="">
          <i className="postCard__icon-reblog" />
        </a>
      </li>
      <li className="postCard__button">
        <a
          className="postCard__button-link"
          href=""
          onClick={handleOptionButtonClick}
        >
          <i
            className="postCard__icon-options"
          >
            <Popover
              postCardId={postCardId}
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
