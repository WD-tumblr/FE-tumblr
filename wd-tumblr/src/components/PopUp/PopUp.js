import React from 'react';
import './PopUp.scss';


const PopUp = ({ popupState = false, children, onClick }) => {
  if (!popupState) return null;
  const handleClick = (e) => {
    if (e.target.id === 'popup') {
      onClick();
    }
  };
  return (
    <div
      className="popup__container"
      onClick={handleClick}
      id="popup"
    >
      {children}
    </div>
  );
};

export default PopUp;
