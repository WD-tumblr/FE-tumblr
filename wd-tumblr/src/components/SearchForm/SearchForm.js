import React from 'react';
import './SearchForm.scss';
const SearchForm = () => {
  return (
    <form className="searchFrom">
      <input  className="searchFrom__input" placeholder="Tumblr 검색" />
      <button className="searchFrom__button" />
    </form>
  );
};

export default SearchForm;
