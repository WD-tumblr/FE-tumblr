import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';
const NavigationBar = () => (
  // eslint-disable-next-line no-unused-expressions
  <nav className="navigationBar">
    <NavLink to="/dashboard">Dash</NavLink>
    <NavLink to="/explore">Explore</NavLink>
    <NavLink to="/inbox">InBox</NavLink>
  </nav>
);

export default NavigationBar;
