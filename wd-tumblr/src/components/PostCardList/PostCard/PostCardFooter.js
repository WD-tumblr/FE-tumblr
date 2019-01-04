import React from 'react';
import PopUp from '../../common/PopUp';
import Popover from '../../common/Popover';
import ReplyBox from '../../ReplyBox';
import Options from '../../common/Options';


const PostCardFooter = ({
  popupState, handleReplyButtonClick,
  userId,
  postCardId, handleOptionButtonClick, isOpen,
  options,
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
            userId={userId}
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
              isOpen={isOpen}
            >
              <Options
                optionId={postCardId}
                options={options}
              />
            </Popover>
          </i>
        </a>
      </li>
    </ul>
  </div>
);

export default PostCardFooter;
