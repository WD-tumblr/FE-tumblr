import React from 'react';


const PostCardHeader = ({ userId }) => (
  <div className="postCard__header">
    <span className="userId">{userId}</span>
  </div>
);

export default PostCardHeader;
