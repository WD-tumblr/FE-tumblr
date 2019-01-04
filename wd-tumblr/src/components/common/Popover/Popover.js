import React from 'react';
import './Popover.scss';


const Popover = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popover__container">
      {children}
    </div>
  );
};

export default Popover;
