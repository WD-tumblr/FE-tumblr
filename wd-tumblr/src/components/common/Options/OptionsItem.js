import React from 'react';

const OptionsItem = ({ buttonText, onClick }) => (
  <div>
    <li onClick={onClick}>
      <span className="popover__container-span">
        {buttonText}
      </span>
    </li>
  </div>
);

export default OptionsItem;
