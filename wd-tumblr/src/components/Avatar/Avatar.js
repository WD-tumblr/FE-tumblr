import React from 'react';
import './Avatar.scss';
import DefaultAvatar from '../../assets/images/octahedron.png';

const Avatar = ({ avatarImg = DefaultAvatar, className, containerClass = 'avatar' }) => (
  <div className={containerClass}>
    <a className="avatarLink">
      <img src={avatarImg} className={className} alt="avatar" />
    </a>
  </div>
);

export default Avatar;
