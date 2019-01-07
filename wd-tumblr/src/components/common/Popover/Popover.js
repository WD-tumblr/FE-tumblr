import React from 'react';
import './Popover.scss';


const Popover = ({ isOpen, children, popOverClass }) => {
  if (!isOpen) return null;

  return (
    <div className={popOverClass}>
      {children}
    </div>
  );
};

export default Popover;
