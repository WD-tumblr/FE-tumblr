import React from 'react';
import './Avatar.scss';
import DefaultAvatar from '../../assets/images/octahedron.png';

const Logo = () => (
  <div className="avatar">
    <a className="avatarLink">
      <img src={DefaultAvatar} />
    </a>
  </div>
);

export default Logo;
