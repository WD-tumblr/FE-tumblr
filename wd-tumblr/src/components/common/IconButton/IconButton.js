import React from 'react';
import './IconButton.scss';


const IconButton = ({
  iconClassName, onClick, children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <li className="postCard__button">
      <a className="postCard__button-link" onClick={handleClick}>
        <i className={iconClassName} />
      </a>
      {children}
    </li>
  );
};

export default IconButton;
