import React from 'react';
import PostCard from '../PostCard';

import './PostCardList.scss';


const PostCardList = ({ postCards, handleSetPostCards }) => (
  <ul className="postCardList__container">
    {postCards.map((v, i) => (
      <PostCard
        key={i}
        {...v}
        postCardId={i}
        handleSetPostCards={handleSetPostCards}
      />))}
  </ul>
);

export default PostCardList;
