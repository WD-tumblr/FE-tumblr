import React from 'react';
import PostCard from './PostCard';

import './PostCardList.scss';


const PostCardList = ({
  postCards, handleSetPostCards, userId, handleDeletePost,
}) => (
  <ul className="postCardList__container">
    {postCards.map((postcard, i) => (
      <PostCard
        key={i}
        userId={userId}
        handleSetPostCards={handleSetPostCards}
        handleDeletePost={handleDeletePost}
        {...postcard}
      />))}
  </ul>
);

export default PostCardList;
