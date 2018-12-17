import React from 'react';
import './Modal.scss';



const Modal = ({show, children}) => {
  if(!show) return null
  return (
    <div className="modal__container">
      {children}
    </div>
  )
};

export default Modal;