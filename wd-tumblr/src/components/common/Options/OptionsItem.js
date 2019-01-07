import React from 'react';

const OptionsItem = ({ buttonText, onClick }) => (

  <li onClick={onClick}>
    <span className="popover__container-span">
      {buttonText}
    </span>
  </li>

);

export default OptionsItem;
