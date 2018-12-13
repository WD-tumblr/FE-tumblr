import React from 'react';
import './Logo.scss';
const Logo = ({ img, alt }) => {
  return (
    <div>
      <h1 className="logo" />
      <a>
        <img src={img} alt={alt} />
      </a>
    </div>
  );
};

export default Logo;
