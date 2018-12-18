import React from 'react';
import './PostCard.scss';

const PostCard = ({ img, alt }) => (
  <div>
    <h1 className="logo">
      <a className="logoLink">
        <img src={logo} alt={alt} />
      </a>
    </h1>
  </div>
);

export default PostCard;
