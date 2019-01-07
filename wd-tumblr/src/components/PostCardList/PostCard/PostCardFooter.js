import React from 'react';
import PopUp from '../../common/PopUp';
import Popover from '../../common/Popover';
import ReplyBox from '../../ReplyBox';
import Options from '../../common/Options';
import IconButton from '../../common/IconButton';


const PostCardFooter = ({
  popupState, handleReplyButtonClick,
  userId,
  postCardId, handleOptionButtonClick, isOpen,
  options,
}) => (
  <div className="postCard__footer">
    <div className="notes__container" />
    <ul className="postCard__buttons">
      <IconButton iconClassName="postCard__icon-share" />
      <IconButton
        iconClassName="postCard__icon-reply"
        onClick={handleReplyButtonClick}
        children={(
          <PopUp popupState={popupState}>
            <ReplyBox
              postCardId={postCardId}
              userId={userId}
            />
          </PopUp>
        )}
      />
      <IconButton iconClassName="postCard__icon-reblog" />
      <IconButton
        iconClassName="postCard__icon-options"
        onClick={handleOptionButtonClick}
        children={(
          <Popover
            isOpen={isOpen}
            popOverClass="popover__container"
          >
            <Options
              optionId={postCardId}
              options={options}
            />
          </Popover>
        )}
      />
    </ul>
  </div>
);

export default PostCardFooter;
