import React from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContet';
import PostCardFooter from './PostCardFooter';

const PostCard = (
  {
    userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
    postCardId,
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
      <PostCardFooter postCardId={postCardId} />
    </div>
  </div>
);

export default PostCard;
