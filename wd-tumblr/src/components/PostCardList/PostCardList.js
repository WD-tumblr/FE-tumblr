import React from 'react';
import PostCard from './PostCard';
import './PostCardList.scss';
import PropTypes from 'prop-types';

const PostCardList = ({
  postCards, handleSetPostCards, userId, options,
}) => (
  <ul className="postCardList__container">
    {postCards.map((postcard, i) => (
      <PostCard
        key={i}
        userId={userId}
        handleSetPostCards={handleSetPostCards}
        options={options}
        {...postcard}
      />))}
  </ul>
);

PostCardList.propTypes = {
  postCards: PropTypes.array.isRequired,
  handleSetPostCards: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default PostCardList;
