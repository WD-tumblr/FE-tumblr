import React from 'react';
import './Popover.scss';


const Popover = () => (
  <div className="popover__container">
    <ul>
      <li><span className="popover__container-span">Edit</span></li>
      <li><span className="popover__container-span">Delete</span></li>
    </ul>
  </div>
);
export default Popover;
