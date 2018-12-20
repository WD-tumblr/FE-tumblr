import React, { Component } from 'react';
import './Popover.scss';


class Popover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isOpen) return null;
    return (
      <div className="popover__container">
        <ul>
          <li><span className="popover__container-span">Edit</span></li>
          <li><span className="popover__container-span">Delete</span></li>
        </ul>
      </div>
    );
  }
}

export default Popover;
