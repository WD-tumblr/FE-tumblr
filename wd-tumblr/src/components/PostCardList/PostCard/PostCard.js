import React, { Component } from 'react';
import Avatar from '../../common/Avatar';
import './PostCard.scss';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContet';
import PostCardFooter from './PostCardFooter';

class PostCard extends Component {
  state={
    isOpen: false,
    popupState: false,
  }

  handleReplyButtonClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ popupState: !prevState.popupState }));
  }

  handleOptionButtonClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
      postCardId,
      handleDeletePost,
      options,
    } = this.props;

    const { isOpen, popupState } = this.state;
    return (
      <div className="postCard__container">
        <Avatar
          avatarImg={avatarImg}
        />
        <div className="postCard">
          <PostCardHeader userId={userId} />
          <PostCardContent
            title={title}
            cardImg={cardImg}
            cardImgAlt={cardImgAlt}
            content={content}
            tags={tags}
          />
          <PostCardFooter
            userId={userId}
            postCardId={postCardId}
            handleOptionButtonClick={this.handleOptionButtonClick}
            isOpen={isOpen}
            handleReplyButtonClick={this.handleReplyButtonClick}
            popupState={popupState}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default PostCard;
