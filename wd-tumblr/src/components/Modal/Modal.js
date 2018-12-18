import React from 'react';
import './Modal.scss';



const Modal = ({show, children, onClick}) => {
  const handleClick = (e)=>{
    if(e.target.id ==="modal"){
       onClick();
    }
  }
  if(!show) return null
  return (
    <div className="modal__container" onClick={handleClick} id="modal">
      {children}
    </div>
  )
};

export default Modal;