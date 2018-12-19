import React from 'react';
import './Avatar.scss';
import DefaultAvatar from '../../assets/images/octahedron.png';

const Avatar = ({ avatarImg = DefaultAvatar }) => (
  <div className="avatar">
    <a className="avatarLink">
      <img src={avatarImg} />
    </a>
  </div>
);

export default Avatar;
