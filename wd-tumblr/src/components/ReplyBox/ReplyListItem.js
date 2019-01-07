import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import DefaultUserProfileImg from '../../assets/images/pyramid.png';
import Popover from '../common/Popover';
import Options from '../common/Options';


class ReplyListItem extends Component {
  state = {
    isOpen: false,
  }

  handleOptionButtonClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      profileImg, userId, replyText, options, replyId,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <li className="replyItem">
        <Avatar
          avatarImg={DefaultUserProfileImg}
          containerClass="replyThumbnail__container"
          className="replyThumbnail"
        />
        <div className="replyText__container">
          <p className="userId">{userId}</p>
          <p className="replyText">{replyText}</p>
          <a
            className="reply__optionButton"
            onClick={this.handleOptionButtonClick}
          >
            <i className="postCard__icon-reply" />
          </a>
          <Popover
            isOpen={isOpen}
            popOverClass="reply__popover"
          >
            <Options options={options} optionId={replyId} />
          </Popover>
        </div>
      </li>
    );
  }
}

export default ReplyListItem;
