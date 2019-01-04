import React, { Component } from 'react';
import Avatar from '../../common/Avatar';
import './PostCard.scss';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContet';
import PostCardFooter from './PostCardFooter';
import PropTypes from 'prop-types';

class PostCard extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    avatarImg: PropTypes.string,
    cardImg: PropTypes.string,
    cardImgAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array,
    postCardId: PropTypes.string,
    options: PropTypes.array,
  }

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
