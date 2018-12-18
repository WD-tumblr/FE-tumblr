import React from 'react';
import './Avatar.scss';
import DefaultAvatar from '../../assets/images/octahedron.png';

const Avatar = ({ avatarImage = DefaultAvatar }) => (
  <div className="avatar">
    <a className="avatarLink">
      <img src={avatarImage} />
    </a>
  </div>
);

export default Avatar;
