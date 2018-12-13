import React from 'react';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import NavigationBar from '../NavigationBar';
import './Header.scss';
const Header = props => {
  return (
    <header className="header">
      <Logo />
      <SearchForm />
      <NavigationBar />
    </header>
  );
};

export default Header;
