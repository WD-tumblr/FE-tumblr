import React from 'react';
import PostCard from '../PostCard';
import DefaultImg from '../../assets/images/pyramid.png';
import './PostCardList.scss';

const PostCardList = ({ postCards }) => (
  <ul className="postCardList__container">
    {postCards.map((v, i) => (
      <PostCard
        key={i}
        {...v}
        postCardId={i}
      />))}
  </ul>
);

export default PostCardList;
