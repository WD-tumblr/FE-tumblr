import React from 'react';
import './Popover.scss';


const Popover = ({ isOpen, postCardId, deletePost }) => {
  if (!isOpen) return null;
  const handleClick = (e) => {
    e.preventDefault();
    deletePost(postCardId);
  };
  return (
    <div className="popover__container">
      <ul>
        <li><span className="popover__container-span">Edit</span></li>
        <li>
          <span
            className="popover__container-span"
            onClick={handleClick}
          >
            Delete
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Popover;
