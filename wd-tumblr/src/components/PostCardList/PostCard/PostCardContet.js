import React from 'react';


const PostCardContent = ({
  title, cardImg, cardImgAlt, content, tags,
}) => (
  <div className="postCard__content">
    <div className="postCard__title-container">
      <h2 className="postCard__heading">{title}</h2>
    </div>
    {cardImg && (
    <div className="postCard__image-container">
      <img src={cardImg} alt={cardImgAlt} />
    </div>
    )}
    <div className="postCard__bodyText">
      <p>{content}</p>
    </div>
    {tags && (<div className="postCard__tags">{tags}</div>)}
  </div>
);

export default PostCardContent;
