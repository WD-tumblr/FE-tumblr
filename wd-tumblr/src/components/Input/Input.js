import React from 'react';
import './Input.scss';


const Input = ({
  placeholder = '',
  type = 'text',
  required,
  name = '',
  onChange,
}) => (
  <input
    onChange={onChange}
    name={name}
    type={type}
    required={required}
    placeholder={placeholder}
  />
);

export default Input;
