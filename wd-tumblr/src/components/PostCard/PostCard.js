import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';
import PopUp from '../PopUp';
import ReplyBox from '../ReplyBox';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContet';
import PostCardFooter from './PostCardFooter';

const PostCardList = (
  {
    userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
  },
) => (
  <div className="postCard__container">
    <Avatar avatarImg={avatarImg} />
    <div className="postCard">
      <PostCardHeader userId={userId} />
      <PostCardContent
        title={title}
        cardImg={cardImg}
        cardImgAlt={cardImgAlt}
        content={content}
        tags={tags}
      />
      <PostCardFooter />
    </div>
  </div>
);

export default PostCardList;
